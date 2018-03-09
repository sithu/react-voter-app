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
            electionList: [{
                "id": 1,
                "name": "Which donuts you like huh???",
                "questions": [
                    {label: "Krispy Kreme glazed", id: 1},
                    {label: "Blueberry cake", id: 2},
                    {label: "Donut holes", id: 3},
                ]
            }, {
                "id": 2,
                "name": "Large structures you are okay with building in our city",
                "questions": [
                    {label: "Apple spaceship", id: 1},
                    {label: "Giant android shaped building", id: 2},
                    {label: "A 3 story family home", id: 3},
                ]
            }],
            registeredVoters: [
                {firstName: 'Sithu', lastName: 'Aung', ssn: "1",},
                {firstName: 'Julie', lastName: 'Chen', ssn: "2",},
                {firstName: 'Madi', lastName: 'Pignetti', ssn: "3"},
            ],
            elections: [],
        }
    }

    submitBallot = (answers) => {
        console.log("ballot submitted");
        console.log("ballot results:", answers);
    };

    render() {
        return (
            <div>
                <Header headerText=" happy campers " />
                <Voter voters={this.props.voters} onSave={this.props.insertVoter} />
                <SelectElection elections={this.state.electionList} 
                    registeredVoters={this.state.registeredVoters}
                    onSubmitBallot={this.submitBallot}/>               
                <ElectionForm election={this.props.election} onSubmitQuestion={this.props.addQuestion} onSubmitElection={this.props.insertElection}/>
                <h3>Placeholder for Election Result Component</h3>
                <CurrentElections elections={this.props.elections}/>
            </div>
        );
    }
}
