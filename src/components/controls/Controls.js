import React, {Component, Fragment} from 'react';
import {Select, MenuItem, Button, Box} from '@material-ui/core';
import './Controls.css';

export default class Controls extends Component {

    render() {
        return(
            <Box>

                <Select
                    className={'controlsDropdown'}
                    onChange={this.props.handleSelectChange}
                    value={this.props.selectedRepType}
                    name={'selectedRepType'}>
                    <MenuItem key={0} value={0}>Select Representative Type</MenuItem>
                    {
                        this.props.representativeTypes.map( type => {
                            return(
                                <MenuItem key={type.value} value={type.value}>{type.label}</MenuItem>
                            )
                        })
                    }
                </Select>

                <Select
                    className={'controlsDropdown'}
                    onChange={this.props.handleSelectChange}
                    value={this.props.selectedState}
                    name={'selectedState'}>
                    <MenuItem key={0} value={0}>Select Your State</MenuItem>
                    {
                        this.props.states.map( state => {
                            return(
                                <MenuItem key={state.value} value={state.value}>{state.label}</MenuItem>
                            )
                        })
                    }
                </Select>

                <Button disabled={this.props.selectedState === 0 || this.props.selectedRepType === 0} onClick={this.props.requestFetchReps}>Search</Button>

            </Box>
        )
    }
}