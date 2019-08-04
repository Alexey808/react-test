import React from 'react';

const MyFunctionComponent = ({testCollection, testChange, testClick}) => {
  const collection = testCollection.map((item) => {
    return (
      <div key={item.id}>
        <input value={item.name} onChange={testChange}/>
        <button onClick={testClick}>testClick</button>
      </div>
    );
  });
  return (
    <div>
      {collection}
    </div>
  );
}


const mokList = [{id:0, name:'item0'},{id:1, name:'item1'},{id:2, name:'item2'}];
export default class Events extends React.Component {

  testClick(e) {
    console.log(e);
  }

  testChange(e){
    console.log(e.target.value);
  }

	render() {
    return(
      <div>
        <MyFunctionComponent 
          testCollection={mokList} 
          testChange={(e)=>this.testChange(e)} 
          testClick={(e)=>this.testClick(e)}
        />
      </div>  
    );
  }
}