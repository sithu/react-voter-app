import * as React from 'react';
import * as PropTypes from 'prop-types';
import Modal from 'react-modal';

export class ElectionResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
    }

    openModal = () => {
        this.calculateResult();
        this.setState({
            modalIsOpen: true
        });
    }

    calculateResult = () => {
        let result = { 
            name: this.props.election.name,
            questions: this.props.election.questions 
        };

        result.questions.forEach( q => {
            this.countBallots(q.id);
        });
    }

    countBallots = (questionId) => {
        const electionId = this.props.election.id;
        let yesCount = 0;
        let noCount = 0;
        this.props.ballots.forEach( b => {
            if (electionId === b.election_id) {
                console.log(b.result);
                b.result.forEach( (r, rindex) => {
                    
                });
            }
        });
    }


    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        console.log('----result-----');
        console.log(this.props.ballots);
        console.log(this.props.election);
        
        return (
            <div>
                <button onClick = {this.openModal}>View Result</button>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Election Results">
                    <h4>Results</h4>
                    
                        <p><button onClick={this.closeModal}> Close </button></p>
                </Modal>
            </div>
        );
    }
}