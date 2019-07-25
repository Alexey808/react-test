import React, {Component} from 'react';
import './filters.css';
import RadioButtons from '../../common/radio-button/radio-button';

export default class Filters extends Component {
  
  radioChange(value) {
    console.log(value);
  }

  render() { 
    const itemsList = [
      {id: 0, name: "p0", value: "param0"},
      {id: 1, name: "p1", value: "param1"},
      {id: 2, name: "p2", value: "param2"}
    ];

    const selectedParam = "param2"

    return(
      <div className="filter-container">
        <h2 className="filter-title">Filter</h2>
        <div className="filter-buttons">
          <RadioButtons 
            collection={itemsList} 
            selected={selectedParam} 
            radioChange={(value)=>this.radioChange(value)}
          />
        </div>
      </div>
    );
  }
}