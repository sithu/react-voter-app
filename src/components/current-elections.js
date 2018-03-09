import * as React from 'react';

import { ElectionResult } from './election-result'; 

export class CurrentElections extends React.Component {

    static defaultProps = {
        elections: [],
        ballots: [],
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <table>
                    <thead>
                        <tr>
                            <td>Election</td><td>Results</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.elections.map( election => {
                        return <tr><td> Election {election.id} </td> 
                        <td><ElectionResult election={election} ballots={this.props.ballots}/></td></tr>;})}
                    </tbody>
                </table>
            </div>
        );
    }
};
