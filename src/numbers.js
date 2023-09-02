import React from 'react';
import { connect } from 'react-redux';

function Numbers({ x,addnumber}) {
  return (
    <div>
      <button onClick={addnumber}>Add a Number</button>
      <div>{
        x.map((item)=>{
          return <li>{item}</li>
        })}</div>
    </div>
  );
}
const mapStateToProps = (globalState) => {
  return { 
    x: globalState 
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addnumber:()=>{dispatch({type:"add",payload:5})}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Numbers);
