import React, {Component} from 'react';
import {Box} from '@material-ui/core';
import './Representatives.css';
import RepresentativesList from './RepresentativesList';
import Representative from './Representative';

export default class RepresentativesView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRepIndex: -1
        }
    }

    handleClick = index => {
        this.setState({
            selectedRepIndex: index
        })
    };


    render() {

        let selectedRepInfo = this.state.selectedRepIndex >= 0 ? this.props.currentReps[this.state.selectedRepIndex] : false;

        return(
            <Box className={'repsViewContainer'}>
                <h4>Representatives</h4>
                <Box className={'repsViewInnerContainer'}>
                    <RepresentativesList
                        currentReps={this.props.currentReps}
                        selectedRepIndex={this.state.selectedRepIndex}
                        handleClick={this.handleClick}
                    />
                    <Representative repInfo={selectedRepInfo}/>
                </Box>
            </Box>
        )
    }
}