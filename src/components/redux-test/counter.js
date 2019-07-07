import React from 'react';
// import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions  from './actions';

const Counter = ({counter, inc, dec, rnd}) => {
	return(
		<div>
			<h2>{counter}</h2>
			<button id='inc' onClick={inc}>inc</button>
			<button id='rnd' onClick={dec}>dec</button>
			<button id='dec' onClick={rnd}>rnd</button>
		</div>
	);
};

/**
 * Redux получаем доступ к state
 */
const mapStateToProps = (state) => {
	return {
		counter: state
	}
};

/**
 * Redux методы для измеения state
 */
// сокращённая запись вторым параметром в связке
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(actions, dispatch);
// };

/**
 * Redux связка
 */
export default connect(mapStateToProps, actions)(Counter);