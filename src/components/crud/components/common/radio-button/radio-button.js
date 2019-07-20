import React, {Component} from 'react';

export default class RadioButtons extends Component {

  getCollection() {
    const {collection, selectedId, onClick} = this.props;

    return collection.map((item) => {
      if (item.value === selectedId) {
        return (
          <div key={item.value}>
            <input type="radio" 
                name={item.name} 
                onClick={()=>onClick(item.value)}
                checked
            />
            <label>{item.name}</label>
          </div>
        );
      } else {
        return (
          <div key={item.value}>
            <input type="radio" 
                name={item.name} 
                onClick={()=>onClick(item.value)}
            />
            <label>{item.name}</label>
          </div>
        );
      }
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