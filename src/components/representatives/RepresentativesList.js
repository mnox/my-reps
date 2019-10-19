import React from 'react';
import {Box, List, ListItem, ListItemText} from '@material-ui/core';


const RepresentativesList = (props) => {
    if(!props.currentReps.length) {
        return (
            <Box>Select your State and Representative Type to search.</Box>
        )
    }

    return (
        <List>
            {
                props.currentReps.map( (rep, index) => {
                    return(
                        <ListItem
                            button
                            key={index}
                            selected={false}
                            onClick={props.handleClick.bind(this, index)}
                            id={index}
                        >
                            <ListItemText
                                primary={rep.name}
                                className={'repListItemName'}
                            />
                        </ListItem>
                    )
                })
            }
        </List>
    )
};

export default RepresentativesList;