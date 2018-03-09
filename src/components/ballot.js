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
        };
    };

    questionRow = (question) => {
        return <Checkbox question={question} onCheckboxChange={this.checkboxChange}/>;
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
        this.props.onSubmitBallot(this.state.answers);
    }

    render() {
        return <div>
            <h3>{this.props.election.name}</h3>
            {this.props.election.questions.map(question => this.questionRow(question))}
            <button type="button" onClick={this.submitBallot}>Submit Ballot</button>
        </div>;
    };

};