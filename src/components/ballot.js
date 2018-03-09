import * as React from 'react';

import { Checkbox } from './checkbox';

export class Ballot extends React.Component {

    constructor(props) {
        super(props);

        const questions= this.props.election.questions;

        let l = [];
        for (let i = 0; i < questions.length; i++) {
            l.push(false);
        }

        this.state = {
            answers: l,
            submitted: false,
        };
    };

    questionRow = (question) => {
        return <Checkbox key={question.id} question={question} onCheckboxChange={this.checkboxChange}/>;
    };

    checkboxChange = (isChecked, id) => {
        console.log("isChecked", isChecked);
        console.log("id", id);

        let tempArr = [...this.state.answers.slice(0, id - 1), isChecked ? true : false, ...this.state.answers.slice(id)]

        this.setState({
            answers: tempArr,
        })

        console.log("yo", tempArr);
    };

    submitBallot = () => {
        this.setState({
            submitted: true,
        })

        this.props.onSubmitBallot({
            electionId: this.props.election.id, 
            voterId: this.props.voterId, 
            results: this.state.answers,
        });
    }

    showSubmitMessage() {
        if (this.state.submitted) {
            return <div>Thank you for submitting your ballot! Please close this window.</div>
        }
    };

    render() {
        return <div>
            <h3>{this.props.election.name}</h3>
            {this.props.election.questions.map(question => this.questionRow(question))}
            <button type="button" onClick={this.submitBallot}>Submit Ballot</button>
            {this.showSubmitMessage()}
        </div>;
    };

};