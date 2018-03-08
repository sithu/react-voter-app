import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Header } from './header';
import { Voter } from './voter';

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
                <Voter voters={this.props.voters} />
                <h3>Placeholder for Select Election and Voting Components</h3>
                <h3>Placeholder for New Election Component</h3>
                <h3>Placeholder for Election Result Component</h3>
            </div>
        );
    }
}
