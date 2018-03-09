import * as React from 'react';
import Modal from 'react-modal';

import { VoterSignIn } from './voter-sign-in';

export class SelectElection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedElection: 1,
            modalIsOpen: false,           
        };
    };

    toggleRadioButton = (event) => {
        this.setState({
            selectedElection: parseInt(event.target.id),
        });
    };

    createRadioButton = (election) => {
        return <div key={election.id} className="radio">
            <label>
                <input type="radio" 
                    id={election.id} 
                    value={election.name} 
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
            <button type="button" onClick={() => {this.setState({modalIsOpen: true})}}>Vote</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={() => this.setState({modalIsOpen: false}) }
                contentLabel="Voter Sign In" >
                <h2 ref={subtitle => this.subtitle = subtitle}>Voter Sign In</h2>
                <VoterSignIn registeredVoters={this.props.registeredVoters}
                    election={this.props.elections.find(election => 
                        {return election.id === this.state.selectedElection})} 
                    electionBallots={this.props.ballots.filter(ballot => 
                        ballot.electionId === this.state.selectedElection)}
                    onSubmitBallot={this.props.onSubmitBallot}
                    onCloseModal={() => this.setState({modalIsOpen: false})}/>
                <button onClick={() => this.setState({modalIsOpen: false})}>Close</button>
            </Modal>
        </form>;

    };

};