import * as React from 'react';

import { VoterSignIn } from './voter-sign-in';

export class SelectElection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedElection: 1,
            toVoterSignIn: false,
            
        };
    };

    toggleRadioButton = (event) => {
        this.setState({
            selectedElection: parseInt(event.target.id),
        });
    };

    createRadioButton = (election) => {
        return <div className="radio">
            <label>
                <input type="radio" id={election.id} value={election.name} 
                checked={this.state.selectedElection === election.id}
                onChange={this.toggleRadioButton} />
                {election.name}
            </label>
        </div>;
    };

    render() {

        return <form>
            <h3>Select Election</h3>
            {this.props.elections.map(election => this.createRadioButton(election))}
            <button type="button" onClick={() => {this.setState({toVoterSignIn: true})}}>Vote</button>
            {this.state.toVoterSignIn ? <VoterSignIn registeredVoters={this.props.registeredVoters}
                election={this.props.elections.find(election => 
                    {return election.id === this.state.selectedElection})} 
                onSubmitBallot={this.props.onSubmitBallot}/> : null}
        </form>;

    };

};