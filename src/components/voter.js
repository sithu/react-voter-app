import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { VoterList } from './voter-list';
import { VoterRegForm } from './voter-reg-form';

export class Voter extends React.Component {
    render() {
        return (
            <div>
                <h3>Voters</h3>
                <VoterRegForm onSave={this.props.onSave} />
                <VoterList voters={this.props.voters}/>
                <hr />
            </div>
        );
    }
}