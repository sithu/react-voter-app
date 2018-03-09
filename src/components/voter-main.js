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

        this.state = {
            elections: [],
        }
    }

    render() {
        return (
            <div>
                <Header headerText="Happy Campers" />
                <Voter voters={this.props.voters} onSave={this.props.insertVoter} />
                <CurrentElections elections={this.props.elections}/>
                <SelectElection elections={this.state.elections}/>
                <ElectionForm election={this.props.election} onSubmitQuestion={this.props.addQuestion} onSubmitElection={this.props.insertElection}/>
                <h3>Placeholder for Election Result Component</h3>
            </div>
        );
    }
}
