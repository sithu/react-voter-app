import * as React from 'react';
import * as PropTypes from 'prop-types';

export const VoterListTable = props => {
    const rows = props.voters.map( voter => {
        return <tr id={voter.id}>
            <td>{voter.first_name}</td>
            <td>{voter.last_name}</td>
            <td>{voter.ssn}</td>
            <td>{voter.address}</td>
            <td>{voter.city}</td>
            <td>{voter.birthdate}</td>
        </tr>;
    });

    return (
        <table>
            <thead>
                <tr>
                    <td>First Name</td><td>Last Name</td><td>SSN</td><td>Address</td><td>City</td><td>Birthdate</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

VoterListTable.propTypes = {
    voters: PropTypes.array.isRequired,
}

VoterListTable.defaultProps = {
    voters: [],
}