import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Header } from './header';
import { Voter } from './voter';
import { ElectionForm } from './election-form';

export class VoterMain extends React.Component {
    static defaultProps = {
        voters: [],
        elections: [],    
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header headerText="Voter Menu" />
                <Voter voters={this.props.voters} onSave={this.props.insertVoter} />
                <h3>Placeholder for Select Election and Voting Components</h3>
                <ElectionForm election={this.props.election} onSubmitQuestion={this.props.addQuestion} />
                <h3>Placeholder for Election Result Component</h3>
            </div>
        );
    }
}
