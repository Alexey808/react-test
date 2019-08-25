import React from 'react';

/**
 * HOC 1
 */
const HocWithData = (View, getData) => {
	return class extends React.Component {

		// async getData() {
		// 	return await getData();
		// }

		componentDidMount() {
			const data = getData();
			debugger
			this.setState({data});
		}

		render() {
			debugger
			const {data} = this.state;
			if (!data) {
				return;
			}
			return <View {...this.props} data={data}/>
		}
	}
};

export default HocWithData;