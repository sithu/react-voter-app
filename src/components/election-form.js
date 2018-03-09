import * as React from 'react';
import * as PropTypes from 'prop-types';
import Modal from 'react-modal';

//const questions= this.props.election.questions

export class ElectionForm extends React.Component {

    static propTypes = {
        onChange: PropTypes.func,
        election: PropTypes.array,
        addQuestion: PropTypes.func,
        questions: PropTypes.array,
    }

    static defaultProps = {
        election: {
           name: '',
           questions: [],
        },

    }

    constructor(props) {
        super(props);

        this.state = { 
            question: '',
            questions: props.election.questions ? props.election.questions.concat() : [],
            election: props.election,
            modalIsOpen: false 
        };

        this.onChange = this.onChange.bind(this);
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }

    submitQuestion = () => {
        this.setState({
       //     election: this.state.election.concat(this.state.question),
            questions: this.state.questions.concat(this.state.question),
        });
    }

    submitElection = () => {
        const election = {
            //question: this.question.value,
            questions: this.state.questions.concat(),
            name: this.name.value,
        }
        this.props.onSubmitElection(election);
        this.closeModal();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
        });
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick = {this.openModal}> Create New Election </button>
                <Modal 
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Create New Election">
                <form> 
                    <h3> Add questions </h3>
                    <p><i>yes or no questions only </i></p> 
                    <div> 
                        <label htmlFor="question-input"> question: </label>
                        <input id="question-input" type="text" name="question" ref={q => this.question = q}
                        onChange={this.onChange} />
                    </div>
                    <div> 
                        <label htmlFor="name-input "> election name: </label>
                        <input id="name-input" type="text" name="name" ref={n => this.name = n}
                        onChange={this.onChange} />
                    </div>

                    <button type="button" onClick={this.submitQuestion}> Add Question </button>
                </form>
                <h4>Your current ballot looks like: </h4>
                <ul> {this.state.questions.map(question => <li key={question}>{question}</li>)} </ul>
                <button type="button" onClick={this.submitElection}> Submit Election for Voting </button>
                <p><button onClick={this.closeModal}> Close New Election </button></p>
                </Modal>
            </div>
        );
    }
}