import * as React from 'react';
import * as PropTypes from 'prop-types';
import Modal from 'react-modal';

export class ElectionResult extends React.Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <button onClick = {this.openModal}> Create New Election </button>
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