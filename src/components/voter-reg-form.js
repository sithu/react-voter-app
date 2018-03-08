import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
  
export class VoterRegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
    }

    openModel = () => {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    save = () => {
        console.log('saving' + this.name.value);
        const voter = {
            name: this.name.value,
        }
        this.props.onSave(voter);
        this.closeModal();
    }

    render() {
        return (
            <div>
                <button onClick={this.openModel}>Register</button>
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Voter Registration Form"
                >
        
                <h2 ref={subtitle => this.subtitle = subtitle}>Voter Registration Form</h2>
                <button onClick={this.closeModal}>Close</button>
                <form>
                    <div>
                    <label htmlFor="name-input">Name:</label>
                    <input id="name-input" type="text" name="name" 
                        ref={n => this.name = n} />
                    </div>
                    <button type="button" onClick={this.save}>Save</button>
                </form>
                </Modal>
            </div>
        );
    }
}