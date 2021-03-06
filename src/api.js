export default function init_api() {
    let api = {};
    api.constants = {};
    api.auth = {};
    api.events = {};
    api.database = {};

    // Constants for user level
    api.constants.GUEST = 0;
    api.constants.MEMBER = 1;
    api.constants.ADMINISTRATOR = 2;

    // Constants for user modification
    api.constants.NEW_USER = 1;
    api.constants.MOD_USER = 2;

    // Constants for log out
    api.constants.LOG_OUT_SUCCESS = 0;


    let internalData = undefined;

    api.database.loadDatabase = function() {
        if(window.localStorage)
            internalData = JSON.parse(window.localStorage.getItem("database"));
    };

    api.database.saveDatabase = function() {
        if(window.localStorage)
            window.localStorage.setItem("database", JSON.stringify(internalData));
    };

    let initializeInternalData = function() {
        internalData = {};
        internalData.users = {};

        internalData.users["yash101"] = {
            username: "yash101",
            password: "password1",
            authorization: api.constants.ADMINISTRATOR,
            first_name: "Dev",
            last_name: "Lodha",
            phone_number: "+19990000000",
            email: "hackeryash101@gmail.com"
        };
        internalData.users["jacob"] = {
            username: "jacob",
            password: "password2",
            authorization: api.constants.MEMBER,
            first_name: "Jake",
            last_name: "Fl",
            phone_number: "+19990000001",
            email: "jake@example.com"
        };

        internalData.events = [
            {
                event_id: null,
                name: "Test event 0",
                description: "A test event 2 Hi my name is Jake, event number zero! This is the description!",
                author: "yash101",
                from: new Date(2018, 10, 28, 12, 0, 0),
                to: new Date(2018, 10, 25, 20, 0, 0),
                categories: ["test"],
                hours_needed: 5,
                location: "Tempe",
                volunteers: [
                    {
                        username: "jacob",
                        hours: 5
                    }
                ]
            },
            {
                event_id: null,
                name: "TestTest123",
                description: "A test event, event number zero! ffffffescdfgfdsklsdrfiouadfujihesdhuijaFSDJHBkswdgiuhffjhkewusbhjbwe This is the description!",
                author: "yash101",
                from: new Date(2018, 10, 24, 12, 0, 0),
                to: new Date(2018, 10, 25, 20, 0, 0),
                categories: ["test"],
                hours_needed: 2,
                location: "Tempe",
                volunteers: [
                    {
                        username: "jacob",
                        hours: 5
                    }
                ]
            },
            {
                event_id: null,
                name: "Event 1",
                description: "A test event, event number zero! This is the description!",
                author: "yash101",
                from: new Date(2018, 10, 24, 12, 0, 0),
                to: new Date(2018, 10, 25, 20, 0, 0),
                categories: ["test"],
                hours_needed: 10,
                location: "Tempe",
                volunteers: [
                    {
                        username: "jacob",
                        hours: 5
                    }
                ]
            }
        ];

        var start = Math.floor(Math.random() * 100000);
        for(var i = 0; i < internalData.events.length; i++) {
            if(internalData.events[i].event_id == null) {
                internalData.events[i].event_id = start;
                start += 1;
            }
        }
    };

    api.database.loadDatabase();

    if(!internalData) {
        initializeInternalData();
        api.database.saveDatabase();
    }

    /*
    Returns: String when error
    Returns: True when log in successful
    */
    api.auth.logIn = function(username, password) {
        if(internalData.users[username] && internalData.users[username].password === password) {
            internalData.currentUser = username;
            api.database.saveDatabase();
            return true;
        }
        return "Invalid Username or Password";
    };

    /*
    Returns: int authorization level. 0 if undefined (guest)
    */
    api.auth.checkLevel = function() {
        if(!internalData.currentUser) {
            return 0;
        }

        return internalData.users[internalData.currentUser].authorization;
    };

    /*
    returns api.constants.MOD_USER or api.constants.NEW_USER if successful
    returns a string with error if failure
    */
    api.auth.modifyUser = function(user) {

        // user = {username, password, authorization, first_name, last_name, phone_number, email}

        let currentLevel = api.auth.checkLevel();

        // Find the current existing user
        let find = internalData.users[user.username];

        // If the user does not exist:
        if(!find) {
            // Create new user
            if(!user.username) return "Username bad";
            if(!user.password) return "Password bad";
            if(!user.first_name) return "First name bad";
            if(!user.last_name) return "Last name bad";
            if(!user.phone_number) return "Phone number bad";
            if(!user.email) return "Email bad";

            internalData.users[user.username] = {
                username: user.username,
                password: user.password,
                first_name: user.first_name,
                last_name: user.last_name,
                phone_number: user.phone_number,
                email: user.email,
                authorization: 1
            };

            api.database.saveDatabase();
            return api.constants.NEW_USER;
        } else {
            let curUser = internalData.users[user.username];

            if(user.remove === true)
                delete internalData.users[user.username];

            curUser = {
                username: user.username || curUser.username,
                password: user.password || curUser.password,
                first_name: user.first_name || curUser.first_name,
                last_name: user.last_name || curUser.last_name,
                phone_number: user.phone_number || curUser.phone_number,
                email: user.email || curUser.email,
                authorization: curUser.authorization
            };

            if(currentLevel >= api.constants.ADMINISTRATOR && user.authorization !== undefined) {
                curUser.authorization = user.authorization;
            } else if(currentLevel < api.constants.ADMINISTRATOR) {
                return "Error: permission to change user permission denied!";
            }

            internalData.users[user.username] = curUser;

            api.database.saveDatabase();
            return api.constants.MOD_USER;
        }
    };

    /*
    Returns api.constants.LOG_OUT_SUCCESS log out was successful,
    otherwise returns a string, "No user is currently logged in!"
    */
    api.auth.logOut = function() {
        if(internalData.currentUser) {
            internalData.currentUser = undefined;
            api.database.saveDatabase();
            return api.constants.LOG_OUT_SUCCESS;
        }
        return "No user is currently logged in!";
    };

    api.events.getEvents = function(search, from, to) {
        let ret = [];
        let eventsList = internalData.events;

        for(var i = 0; i < eventsList.length; i++) {
            let s = new RegExp(search, "i");

            if(eventsList[i].name.match(s) &&
                (!from || eventsList[i].from >= from) &&
                (!to || eventsList[i] <= eventsList[i].to)) {
                ret.push(eventsList[i]);
            }

        }

        return ret;
    };

    api.events.updateEvent = function(eid) {
        api.database.saveDatabase();
    };

    api.database.getUsers = function(regex) {
        users = [];
        f = new RegExp(regex, 'i');
        for(var u in internalData.users) {
            if(u.username.match(regex) || u.first_name.match(regex) || u.last_name.match(regex) || (u.first_name + ' ' + u.last_name).match(regex))
                users.push(u);
        }

        return users;
    };

    api.database.importCSV = function(csv_data) {

    };

    api.database.exportCSV = function() {
    };

    window.api = api;
    api.debug = {};
    api.debug.data = internalData;
};