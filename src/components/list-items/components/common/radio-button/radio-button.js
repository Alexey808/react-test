import React, {Component} from 'react';

export default class RadioButtons extends Component {
  // state = {
  //   selected: ""
  // }

  // change = (value) => {
  //   console.log("change value", value);
  //   this.props.radioChange(value);
  // }

  getCollection() {
    const {collection, selected, radioChange} = this.props;
    // this.setState({selected: selected});
    
    return collection.map((item) => {
      const checked = selected === item.value;

      return (
        <div key={item.id}>
          <input 
            type="radio"
            id={item.id}
            name={item.name}
            onChange={radioChange(item.value)}
            defaultChecked={checked}
            value={item.value}
          />
          <label htmlFor={item.id}>{item.name}</label>
        </div>
      );
    });
  }
  
  render() {
    const collection = this.getCollection();

    return(
      <form>
        {collection}
      </form>
    );
  }
}
