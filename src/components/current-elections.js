import * as React from 'react';

export class CurrentElections extends React.Component {

    static defaultProps = {
        elections: [],
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
                        return <tr> <td> Election {election.id} </td> 
                        <td> <button type ="button"> View Results </button> </td></tr>;})}
                    </tbody>
                </table>
            </div>
        );
    }
};
