import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import { appStore } from './store';
import { CarTool } from './components/car-tool-redux';
import { insert, refresh, update, deleteCar } from './actions';

import { Main } from './components/main-menu';

const CarToolContainer = connect(
    ({ cars }) => ({ cars }),
    dispatch => bindActionCreators({ refresh, insert, update, deleteCar }, dispatch)
)(CarTool);

ReactDOM.render(<Main />, document.querySelector('main'))