import React from 'react';
import { withRouter } from 'react-router-dom';

const ItemPage3 = ({history}) => {
	return (
		<div>
			{/*history*/}
			<TestComponent click={(value) => history.push(`/itempage3/${value}`)}/>
			{/*относительные пути, url должен быть "http://localhost:3000/itempage3/" */}
			<TestComponent click={(value) => history.push(`${value}`)}/>
		</div>
	);
};
export default withRouter(ItemPage3);


class TestComponent extends React.Component {
	render() {
		const {click} = this.props;
		return (
			<div onClick={() => click(1)}>click me, test!</div>
		);
	}
}
