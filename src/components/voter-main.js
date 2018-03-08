import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Header } from './header';
import { SelectElection } from './select-election';

export class VoterMain extends React.Component {
    static defaultProps = {
        voters: [],
        elections: [],    
    }

    constructor(props) {
        super(props);

        this.state = {
            elections: ['E1', 'E2', 'E3'],
        }
    }

    render() {
        return (
            <div>
                <Header headerText="Voter Menu" />
                <h3>Placeholder for voter registration Component</h3>
                <h3>Placeholder for Select Election and Voting Components</h3>
                <SelectElection elections={this.state.elections}/>
                <h3>Placeholder for Election Result Component</h3>
            </div>
        );
    }
}
