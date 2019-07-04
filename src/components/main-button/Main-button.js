import React, {Component} from 'react';
import './main-button.css';
import logo from "../../logo.svg";

const ButtonIcon = () => {
	return <img className='button-icon' src={logo} alt='It is react!'/>;
};

export default class MainButton extends Component {
	render() {
		const {active} = this.props;
		console.log(this.props);
		let classNames='main-button';
		if (active) {
			classNames += ' active'
		}
		const style = {display: 'flex', justifyContent: 'center'};
		return(
			<div style={style} className='button-container'>
				<button className={classNames}
				        onClick={()=>this.props.myClick('_test_')}>
					<div className='content-container'>
						<ButtonIcon/>
						<span>Click me</span>
						<ButtonIcon/>
					</div>
				</button>
			</div>
		)
	}
}