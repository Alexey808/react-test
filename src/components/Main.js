import React, {Component} from 'react';
import MainButton from "./main-button/Main-button";


const AdditionalComponent  = () => {
	return <div>additional component</div>;
};



export default class Main extends Component {
	state = {
		isActive: false
	};

	onClick() {
		// если значение state зависит от предыдущего значения state то передаём его как параметр
		this.setState((state) => {
			return {isVisible: !state.isVisible}
		});
	};

	render() {
		const {isActive} = this.state;
		return (
			<div>
				<MainButton active={isActive} myClick={()=>this.onClick}/>
				<AdditionalComponent />
			</div>
		);
	}
}