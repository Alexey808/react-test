import React from 'react';
import './filters.css';
import RadioButtons from '../../common/radio-button/radio-button';

export default class Filters extends React.Component {
    state = {
        itemParameters: [
            {value: 0, name: 'onlyFalse'},
            {value: 1, name: 'onlyTrue'},
            {value: 3, name: 'all'}
        ]
    }


    toggleFilter() {
        // const {parameter} = this.state;
        // const {collection, changeFilter} = this.params;
        // const newCollection = collection.filter((item) => item.parameter !== bool)
        // changeFilter(newCollection);
        // this.setState({parameter: !parameter});
    }

    onSelect(id) {
        const {itemParameters} = this.state;
        const {collection, changeFilter} = this.props;
        const selectParam = itemParameters.find((item)=> item.value === id)
        const filteredCoolection = collection.filter((item) => item.parameter !== Boolean(selectParam.value)) || collection;
        console.log(filteredCoolection);
        changeFilter(filteredCoolection);
    }

    render() { 
        const {itemParameters} = this.state;
        const selectedItem = itemParameters.find((item) => item.value);

        return(
            <div className='filter-container'>
                <h2 className="filter-title">Filter</h2>
                <div className='filter-buttons'>
                    <RadioButtons 
                    collection={itemParameters} 
                    selectedId={selectedItem.id} 
                    onClick={(id)=>this.onSelect(id)}/>
                </div>
            </div>

        );
    }
}