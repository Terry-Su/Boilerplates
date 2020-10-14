import React from 'react'
import { connect } from "react-redux";

function Counter({ count, dispatch }) {
  return <div>
    <div>Count: {count}</div>
    <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
    <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
  </div>;
}
const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Counter);
