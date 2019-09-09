import React from 'react';
import './app.css';
import { Map, List } from 'immutable';

export default class ImmutableTest extends React.Component {
  render() {
    const testMap = Map({prop: "testMap"});
    const testList = List([
      {id: 1, prop: "testList1"},
      {id: 2, prop: "testList2"},
      {id: 3, prop: "testList3"}
    ]);

    const testListView = testList.map((item) => {
      return (
        <div key={item.id}>{item.prop}</div>
      );
    })
    
    return (
      <div className="app">
        {testMap.get("prop")}
        {testListView}
      </div>
    );
  }
}