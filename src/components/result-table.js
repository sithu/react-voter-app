import * as React from 'react';
import * as PropTypes from 'prop-types';

export const VoterResultTable = props => {
    const rows = props.results.map( result => {
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

VoterResultTable.propTypes = {
    results: PropTypes.array.isRequired,
}

VoterResultTable.defaultProps = {
    results: [{ id: 1, question: "Question 1?", num_yes: 100, num_no: 99}],
}