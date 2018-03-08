import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * Voter List Static Component
 * @param {*} props 
 */
export const VoterList = props => <ul>
    {props.voters.map( voter => <li>{voter.name}</li>)}
</ul>;

VoterList.defaultProps = {
    voters: [],
}