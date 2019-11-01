import React, {Component} from 'react';
import {Select, MenuItem, Button, Box} from '@material-ui/core';
import './Controls.css';

export default function Controls (props) {

    return(
        <Box>

            <Select
                className={'controlsDropdown'}
                onChange={props.handleSelectChange}
                value={props.selectedRepType}
                name={'selectedRepType'}>
                <MenuItem key={0} value={0}>Select Representative Type</MenuItem>
                {
                    props.representativeTypes.map( type => {
                        return(
                            <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                        )
                    })
                }
            </Select>

            <Select
                className={'controlsDropdown'}
                onChange={props.handleSelectChange}
                value={props.selectedState}
                name={'selectedState'}>
                <MenuItem key={0} value={0}>Select Your State</MenuItem>
                {
                    props.states.map( state => {
                        return(
                            <MenuItem key={state.value} value={state.value}>{state.label}</MenuItem>
                        )
                    })
                }
            </Select>

            <Button disabled={props.selectedState === 0 || props.selectedRepType === 0} onClick={props.requestFetchReps}>Search</Button>

        </Box>
    )
}