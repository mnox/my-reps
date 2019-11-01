import React from 'react';
import {List, ListItem} from '@material-ui/core';


const Representative = (props) => {
    if(!props.repInfo) {
        return (
            <List></List>
        )
    }

    let [firstName, lastName] = props.repInfo.name.split(' ');
    let {district, phone, office, link} = props.repInfo;

    return (
        <List>

            <ListItem>First Name: {firstName}</ListItem>
            <ListItem>Last Name: {lastName}</ListItem>
            <ListItem>District: {district}</ListItem>
            <ListItem>Phone: {phone}</ListItem>
            <ListItem>Offic: {office}</ListItem>
            <ListItem><a href={link}>{link}</a></ListItem>

        </List>
    )
}

export default Representative;