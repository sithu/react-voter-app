import * as React from 'react';
import * as PropTypes from 'prop-types';
import Modal from 'react-modal';

import { VoterListTable } from './voter-list-table';

export class VoterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
    }

    render() {
        return (
            <div> 
                <button type="button" onClick={() => this.setState({modalIsOpen: true}) }>Show Voters</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={() => this.setState({modalIsOpen: false}) }
                    contentLabel="Voter List"
                    >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Voter List</h2>
                    <VoterListTable voters={this.props.voters} />
                    <button onClick={() => this.setState({modalIsOpen: false})}>Close</button>
                </Modal>
            </div>
        );
    }
};

VoterList.defaultProps = {
    voters: [],
}