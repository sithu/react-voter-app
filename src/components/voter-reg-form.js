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

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    save = () => {
        console.log('saving' + this.name.value);
        const voter = {
            first_name: this.fname.value,
            last_name: this.lname.value,
            address: this.address.value,
            city: this.city.value,
            birthdate: this.birthdate.value
        };
        this.props.onSave(voter);
        this.closeModal();
    }

    render() {
        return (
            <div>
                <button onClick={this.openModel}>Register</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Voter Registration Form"
                    >
                <h2 ref={subtitle => this.subtitle = subtitle}>Voter Registration Form</h2>
                <button onClick={this.closeModal}>Close</button>
                <form>
                    <div>
                        <label htmlFor="fname-input">First Name:</label>
                        <input id="fname-input" type="text" name="fname" ref={n => this.fname = n} />
                    </div>
                    <div>
                        <label htmlFor="lname-input">Last Name:</label>
                        <input id="lname-input" type="text" name="lname" ref={n => this.lname = n} />
                    </div>
                    <div>
                        <label htmlFor="address-input">Address:</label>
                        <input id="address-input" type="text" name="address" ref={n => this.address = n} />
                    </div>
                    <div>
                        <label htmlFor="city-input">City:</label>
                        <input id="city-input" type="text" name="city" ref={n => this.city = n} />
                    </div>
                    <div>
                        <label htmlFor="bd-input">Birthdate:</label>
                        <input id="db-input" type="text" name="birthdate" ref={n => this.birthdate = n} />
                    </div>
                    <button type="button" onClick={this.save}>Save</button>
                </form>
                </Modal>
            </div>
        );
    }
}