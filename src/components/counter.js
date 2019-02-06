import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import { bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, reset}) =>{
    return (
        <section className="main">
        <div className="wrapper-counter">
          <div className="counter-block">
              <div id="counter">{counter}</div>
          </div>
          <div className="button-block">
              
              <button onClick={inc} id="inc" className="btn button btn-primary">&nbsp;</button>
              <button onClick={dec} id="dec" className="btn button">&nbsp;</button>
              <button onClick={reset} id="reset" className="btn button">&nbsp;</button>
          </div>
          
        </div>
      </section>

    );
}

const mapStateToProps = (state) =>{
    return {
        counter: state
    }
}

// const mapDispatchToProps = (dispatch) => {
// return bindActionCreators(actions, dispatch);
   
// }
export default connect(mapStateToProps, actions)(Counter);