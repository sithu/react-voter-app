import * as React from 'react';
import * as PropTypes from 'prop-types';
import Modal from 'react-modal';

export class ElectionForm extends React.Component {

    static propTypes = {
        onChange: PropTypes.func,
        election: PropTypes.array,
        addQuestion: PropTypes.func,
    }

    static defaultProps = {
        election: [],
    }

    constructor(props) {
        super(props);

        this.state = { 
            question: '',
            election: props.election.concat(),
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
            election: this.state.election.concat(this.state.question),
        });
        console.log(this.state.question);
  
    }

    submitElection = () => {
        const election = {
            question: this.question.value,
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
                <h4>Your current ballot looks like: </h4>
                <ul> {this.state.election.map(question => <li key={question}>{question}</li>)} </ul>
                <form> 
                    <h3> Add questions </h3>
                    <p><i>yes or no questions only </i></p> 
                    <div> 
                        <label htmlFor = "question-input "> question: </label>
                        <input id = "question-input" type = "text" name = "question"
                        value={this.state.question} onChange={this.onChange} />
                    </div>
                    <button type = "button" onClick={this.submitQuestion}> Add Question </button>
                </form>
                <button type = "button"> Submit Election </button>
                <p><button onClick={this.closeModal}> Close New Election </button></p>
                </Modal>
            </div>
        );
    }
}