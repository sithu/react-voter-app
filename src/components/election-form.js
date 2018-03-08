import * as React from 'react';
import * as PropTypes from 'prop-types';
import Modal from 'react-modal';

export class ElectionForm extends React.Component {

    static propTypes = {
        onChange: PropTypes.func,
        questions: PropTypes.array,
        addQuestion: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = { 
            question: '',
            modalIsOpen: false 
        };

        this.onChange = this.onChange.bind(this);
    }

    // addQuestion  = question => {
    //     const newQuestion = {
    //         question: this.state.question,
    //     };
    //     this.props.onSubmitQuestion(newQuestion);
    //     this.setState(this.initQuestion());
    
    // }

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
        this.props.onSubmitQuestion(this.state.question);

        this.setState({
            question: '',
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value,
        });
    }

    render() {
        return (
            <div>
                <button onClick = {this.openModal}> Create New Election </button>
                <Modal 
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                contentLabel="Create New Election"
                >
                <form> 
                    <h3> Add questions </h3>
                    <h4> <i>yes or no questions only </i> </h4>
                    <div> 
                        <label htmlFor = "question-input "> question: </label>
                        <input id = "question-input" type = "text" name = "question"
                        value = {this.state.question} onChange = {this.onChange} />
                    </div>
                    <button type = "button"> Add Question </button>
                </form>
                <button type = "button"> Submit Election </button>
                <p><button onClick = {this.closeModal}> Close New Election </button></p>
                </Modal>
            </div>
        );
    }
}