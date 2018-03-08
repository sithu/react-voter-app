import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * Static Component
 * @param {*} props 
 */
export const Main = props => (
    <div>
        <header>
            <h2>{props.headerText}</h2>
        </header>
        <button type="button">Register</button>
        <button type="button">View Voters</button>
        <div>
            <h4>Elections</h4>
            <ul>
                <li>San Jose Mayor</li>
            </ul>
        </div>
        <button type="button">View Results</button>
    </div>
);

Main.propTypes = {
    headerText: PropTypes.string.isRequired,
}

Main.defaultProps = {
    headerText: 'Vote or Die',
}