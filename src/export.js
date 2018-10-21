import 'src/api.js';
import {Component} from "react";
import {Menu} from "antd/lib/menu";
import {Link} from "react-router-dom";
import React from "react";

const options = {
    title: 'Export CSV',
    message: 'Please enter a to and from date to export events to .CSV',
    input: [
        {
            placeholder: 'To'
        },
        {
            label: 'No',
            onClick: () => alert('Click No')
        }
    ],
    childrenElement: () => <div />,
    customUI: ({ title, message, onClose }) => <div>Custom UI</div>,
    willUnmount: () => {}
};

function exportCSV(){
console.log("T");
}
    var[] events = getEvents('',);

