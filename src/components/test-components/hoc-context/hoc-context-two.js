import React from 'react';
import {ContextConsumer} from "./hoc-context-provider-consumer";
export default class HocContextTwo extends React.Component {
	render() {
		console.log('HocContextTwo -> ', this.props);
		// const { data } = this.props;
		// const viewItems = data.map((item) => {
		// 	return (
		// 		<div key={item.id}>
		// 			{item.name}
		// 		</div>
		// 	);
		// });

		return (
			<div>
				<ContextConsumer>
					{
						(data) => {
							console.log('HocContextTwo data -> ', data);
							return (
								<div>
									{/*{*/}
									{/*	data.map((item) => {*/}
									{/*		return (*/}
									{/*			<div key={item.id}>*/}
									{/*				{item.name}*/}
									{/*			</div>*/}
									{/*		);*/}
									{/*	})*/}
									{/*}*/}
								</div>
							);
						}
					}
				</ContextConsumer>
			</div>
		);
	}
}