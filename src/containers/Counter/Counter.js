import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increment} from '../../store/actions/actions'
import * as actionTypes from '../../store/actions/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddHanlder}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractHandler}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li> 
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddHanlder: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubtractHandler: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (counter) => dispatch({type:actionTypes.STORE_RESULT, counter: counter}),
        onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);