import * as React from 'react';

import { Ballot} from './ballot';

export class VoterSignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            voterProcessed: false,
            isValidVoter: true,
        };
    };

    verifyVoterValid = (event) => {
        const voter = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
        };

        // if (!this.voterInList(voter)) {
        //     //console.log("name entered:", voter.firstName, voter.lastName);
        //     this.setState({
        //         isValidVoter: false,
        //     });
        // };

        this.setState({
            voterProcessed: true,
        });

    };

    // voterInList = voter => {
    //     const isInList = false;
    //     this.props.registeredVoters.map(v => {
    //         var vProps = Object.getOwnPropertyNames(v);
            
    //         for (let i = 0; i < vProps.length; i++) {
    //             let propName = vProps[i];
    //             if (v[propName] !== voter[propName])
    //         }
    //     });
    // }

    displayError = () => {
        return <div>User not registered, cannot vote.</div>;
    }

    chooseAccess = () => {
        console.log("voterProcessed:", this.state.voterProcessed);
        console.log("isValidVoter:", this.state.isValidVoter);
        if (!this.state.voterProcessed) {
            return null;
        } else if (this.state.isValidVoter) {
            return <Ballot />;
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
            <button type="button" onClick={this.verifyVoterValid}>Sign In</button>
            {this.chooseAccess()}
        </div>;
    };

};