import * as React from 'react';
import * as PropTypes from 'prop-types';
import moose from '../images/moose.png';

/**
 * Static Component
 * @param {*} props 
 */
export const Header = props => <header>
        <center><h2>♥{props.headerText}♥</h2>
        <img className="moose" src={moose} width="100px" alt="moose"/>
        <p id="slogan"> code or die </p>
        </center>
    </header>;

Header.propTypes = {
    headerText: PropTypes.string.isRequired,
}

Header.defaultProps = {
    headerText: 'Default Header',
}