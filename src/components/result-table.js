import * as React from 'react';
import * as PropTypes from 'prop-types';

export const VoterListTable = props => {
    const rows = props.voters.map( result => {
        return <tr id={result.id}>
            <td>{result.question}</td>
            <td>{result.num_yes}</td>
            <td>{result.num_no}</td>
        </tr>;
    });

    return (
        <table>
            <thead>
                <tr>
                    <td>Question</td><td>Yes</td><td>No</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

VoterListTable.propTypes = {
    results: PropTypes.array.isRequired,
}

VoterListTable.defaultProps = {
    results: [{ id: 1, question: "Question 1?", num_yes: 100, num_no: 99}],
}