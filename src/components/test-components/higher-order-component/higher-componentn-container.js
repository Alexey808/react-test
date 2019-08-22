import React from 'react';

const HigherComponentView = (props) => {
	const {data} = props;
	return (
		<ul>
			{data.map(({id, prop}) => {
					return (
						<li key={id}>{id} / {prop}</li>
					);
				})
			}
		</ul>
	);
};


const HigherComponentContainer = (ViewComponent, data) => {
	return class extends React.Component {
		render() {
			/* логика и рочее */
			const mutateDate = data.map((item) => {
				return {id: item.id, prop: `proppp${item.id}`};
			});

			return (
				<div>
					{/* ...this.props прокинет дальше всё что было прокинуто в HigherComponentContainer */}
					<ViewComponent {...this.props} data={mutateDate}/>
				</div>
			);
		}
	}
};

const data = [{id: 1, prop: 'prop1'},{id: 2, prop: 'prop2'},{id: 3, prop: 'prop3'}];
export default HigherComponentContainer(HigherComponentView, data);