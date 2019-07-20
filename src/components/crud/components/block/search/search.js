import React from 'react';


export default class Search extends React.Component {
    changeInput = (e) => {
        const {items, change} = this.props;
        const newCollection = items.filter((item) => item.name.includes(e.target.value)) || items;
        change(newCollection);
    }

    render() {
        const {items} = this.props;

        return (
            <div>
                <input onChange={this.changeInput}/>
            </div>
        );
    }
}