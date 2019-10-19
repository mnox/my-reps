import React, {Component} from 'react';
import './App.css';
import {Container, AppBar} from '@material-ui/core';
import Controls from './components/controls/Controls.js';
import RepresentativesView from './components/representatives/RepresentativesView';
import States from './assets/States';
import RepresentativeTypes from './assets/RepresentativeTypes';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedState: 0,
            selectedRepType: 0,
            currentReps: []
        };
    }

    handleSelectChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    requestFetchReps = () => {
        if(this.state.selectedState !== 0 && this.state.selectedRepType !== 0) return this.fetchReps();
    }

    async fetchReps() {
        await fetch(`http://localhost:9001/${this.state.selectedRepType}/${this.state.selectedState}`)
            .then(response => response.json())
            .then( response => {
                if(response && response.results) {
                    this.setState({currentReps: response.results});
                }
            })
            .catch( error => alert('Error retrieving results.'));
    }

    render() {
        return (
            <Container fixed>
                <AppBar color={'default'}
                        className={'topMenu'}
                >
                    <Controls
                        states={States}
                        representativeTypes={RepresentativeTypes}
                        selectedState={this.state.selectedState}
                        selectedRepType={this.state.selectedRepType}
                        handleSelectChange={this.handleSelectChange}
                        requestFetchReps={this.requestFetchReps}
                    />
                </AppBar>

                <RepresentativesView currentReps={this.state.currentReps}/>
            </Container>
        );
    }
}

export default App;
