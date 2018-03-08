import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { VoterList } from './voter-list';

export class Voter extends React.Component {
    constructor(props) {
        super(props);
    }
    
    showVoters = () => {
        return <h4>Fix Me!</h4>;
    }

    render() {
        return (
            <div>
                <h3>Voters</h3>
                <button type="button">Register</button>
                <button type="button" onClick={this.showVoters} >Show Voters</button>
                <VoterList voters={this.props.voters}/>
                <hr />
            </div>
        );
    }
}