import React from 'react';
import ReduxSagaComponent from "./redux-saga";


export default class ReduxSaga extends React.Component {
	render() {
		return (
			<ReduxSagaComponent title={'ReduxSagaComponent'} />
		);
	}
}

const mapStateToProps = (state) => ({
	collection: GetCollection(state),
});

const mapDispatchToProps = (dispatch) => ({
	onAdd: (record) => dispatch(ActionAddItem(record)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSaga);
