import * as React from 'react';

import { Ballot} from './ballot';

export class VoterSignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            voterProcessed: false,
            isRegisteredVoter: true,
            hasNotVoted: true,
            voter: '',
        };
    };

    verifyVoterValid = () => {
        const voter = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            ssn: this.ssn.value,
            address: this.address.value,
            city: this.city.value,
            birthdate: this.birthdate.value,
        };

        let foundVoter = this.props.registeredVoters.find((v) => { return v.ssn === voter.ssn });
        this.setState({
            voter: foundVoter,
        });

        if (!foundVoter) {
            this.setState({
                isRegisteredVoter: false,
            });
        };

        if (foundVoter) {
            let foundBallot = this.props.electionBallots.find(ballot => ballot.voterId === foundVoter.id);
                      
            if (foundBallot) {
                console.log("this user already has a ballot:", foundBallot);
                this.setState({
                    hasNotVoted: false,
                });
            };
            
        };

        this.setState({
            voterProcessed: true,
        });

    };

    displayError = () => {
        return <div>User not registered, cannot vote.</div>;
    }

    chooseAccess = () => {
        console.log("voterProcessed:", this.state.voterProcessed);
        console.log("isRegisteredVoter:", this.state.isRegisteredVoter);
        console.log("hasNotVoted:", this.state.hasNotVoted);
        if (!this.state.voterProcessed) {
            return null;
        } else if (this.state.isRegisteredVoter && this.state.hasNotVoted) {
            return <Ballot election={this.props.election}
                voterId={this.state.voter.id}
                onSubmitBallot={this.props.onSubmitBallot}/>;
        } else if (!this.state.isRegisteredVoter){
            return <div>User not registered, cannot vote.</div>;
        } else {
            return <div>User already has submitted a ballot in this election, cannot vote again.</div>;
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
            <div>Social Security Number:
                <input type="number" defaultValue="" 
                    ref={i => this.ssn = i}/></div>
            <div>Address:
                <input type="text" defaultValue="" 
                    ref={i => this.address = i}/></div>
            <div>City:
                <input type="text" defaultValue="" 
                    ref={i => this.city = i}/></div>
            <div>Birth date:
                <input type="text" defaultValue="" 
                    ref={i => this.birthdate = i}/></div>
            <button type="button" onClick={this.verifyVoterValid}>Sign In</button>
            {this.chooseAccess()}
        </div>;
    };

};

