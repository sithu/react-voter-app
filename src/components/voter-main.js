import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Header } from './header';
import { SelectElection } from './select-election';
import { Voter } from './voter';
import { ElectionForm } from './election-form';
import { CurrentElections } from './current-elections';

export class VoterMain extends React.Component {
    static defaultProps = {
        voters: [],
        elections: [],    
    }

    constructor(props) {
        super(props);
    }

    submitBallot = (electionId, voterId, answers) => {
        console.log("ballot submitted");
        console.log("ballot results:", electionId, voterId, answers);
    };

    render() {
        console.log('---render voter-main ---');
        console.log(this.props);
        return (
            <div>
                <Header headerText=" happy campers " />
                <Voter voters={this.props.voters} onSave={this.props.insertVoter} />
                <SelectElection elections={this.props.elections} 
                    registeredVoters={this.props.voters}
                    onSubmitBallot={this.props.insertBallot}/>               
                <ElectionForm election={this.props.elections} onSubmitQuestion={this.props.addQuestion} onSubmitElection={this.props.insertElection}/>
                <CurrentElections elections={this.props.elections}/>
            </div>
        );
    }
}
