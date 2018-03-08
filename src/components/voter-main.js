import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Header } from './header';

export class VoterMain extends React.Component {
    static defaultProps = {
        voters: [],
        elections: [],    
    }

    constructor(props) {
        super(props);
        console.log('--- constructor ---');
    }

    render() {
        return (
            <div>
                <Header headerText="Voter Menu" />
                <h3>Placeholder for voter registration Component</h3>
                <h3>Placeholder for Select Election and Voting Components</h3>
                <h3>Placeholder for New Election Component</h3>
                <h3>Placeholder for Election Result Component</h3>
            </div>
        );
    }
}
