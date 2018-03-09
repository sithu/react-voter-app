import * as React from 'react';

import { Ballot} from './ballot';

export class VoterSignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            voterProcessed: false,
            isValidVoter: true,
            voter: '',
        };
    };

    verifyVoterValid = (event) => {
        const voter = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            ssn: this.ssn.value,
        };

        let foundVoter = this.props.registeredVoters.find((v) => { return v.ssn === voter.ssn});
        this.setState({
            voter: foundVoter,
        })
        if (!foundVoter) {
            this.setState({
                isValidVoter: false,
            })
        }

        this.setState({
            voterProcessed: true,
        });

    };

    displayError = () => {
        return <div>User not registered, cannot vote.</div>;
    }

    chooseAccess = () => {
        console.log("voterProcessed:", this.state.voterProcessed);
        console.log("isValidVoter:", this.state.isValidVoter);
        if (!this.state.voterProcessed) {
            return null;
        } else if (this.state.isValidVoter) {
            return <Ballot election={this.props.election}
                voter={this.state.voter}
                onSubmitBallot={this.props.onSubmitBallot}/>;
        } else {
            return <div>User not registered, cannot vote.</div>;
        }
    }

    render() {
        return <div>
            <h3>Sign in to Vote</h3>
            <div>First Name:
                <input type="text" defaultValue="" 
                    ref={i => this.firstName = i}/></div>
            <div>Last Name:
                <input type="text" defaultValue="" 
                    ref={i => this.lastName = i}/></div>
            <div>SSN:
                <input type="number" defaultValue="" 
                    ref={i => this.ssn = i}/></div>
            <button type="button" onClick={this.verifyVoterValid}>Sign In</button>
            {this.chooseAccess()}
        </div>;
    };

};
