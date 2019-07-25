import React from 'react';
import Input from '../../common/input/input';
import './search.css';

export default class Search extends React.Component {
  state = {
    str: ''
  }

  changeInput = (value) => {
    this.setState({str: value})
    const {items, change} = this.props;
    const newCollection = items.filter((item) => item.name.includes(value)) || items;
    change(newCollection);
  }

  render() {
    const {str} = this.state;

    return (
      <div className="search-container">
        <div className="search-card">
          <h2 className="search-title">Search</h2>
          <div className="search">
            <Input onChange={this.changeInput} value={str}/>
          </div>
        </div>
      </div>
    );
  }
}