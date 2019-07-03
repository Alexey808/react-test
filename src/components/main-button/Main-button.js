import React, {Component} from 'react';
import './main-button.css';
import logo from "../../logo.svg";

const ButtonIcon = () => {
	return <img className='button-icon' src={logo} alt='It is react!'/>;
};

export default class MainButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false
		};
	}




	render() {
		const {isVisible} = this.state;
		console.log(this.props);
		let classNames='main-button';
		if (isVisible) {
			classNames += ' active'
		}
		const style = {display: 'flex', justifyContent: 'center'};
		return(
			<div style={style} className='button-container'>
				<button className={classNames}
				        onClick={() => this.props.myClick()}>
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