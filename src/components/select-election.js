import * as React from 'react';

import { VoterSignIn } from './voter-sign-in';

export class SelectElection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedElection: 'E1',
            toVoterSignIn: false,
            registeredVoters: [
                {firstName: 'Sithu', lastName: 'Aung', ssn: "1",},
                {firstName: 'Julie', lastName: 'Chen', ssn: "2",},
                {firstName: 'Madi', lastName: 'Pignetti', ssn: "3"},
            ],
        };
    };

    toggleRadioButton = (event) => {
        this.setState({
            selectedElection: event.target.value,
        });
    };

    createRadioButton = (election) => {
        return <div className="radio">
            <label>
                <input type="radio" value={election} 
                checked={this.state.selectedElection === election}
                onChange={this.toggleRadioButton} />
                {election}
            </label>
        </div>;
    };

    render() {

        return <form>
            <h3>Select Election</h3>
            {this.props.elections.map(election => this.createRadioButton(election))}
            <button type="button" onClick={() => {this.setState({toVoterSignIn: true})}}>Vote</button>
            {this.state.toVoterSignIn ? <VoterSignIn registeredVoters={this.state.registeredVoters}/> : null}
        </form>;

    };

};