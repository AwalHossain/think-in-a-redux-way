
// interface Value {
//     value: Number
// }

import { connect } from "react-redux";
import { decrement, increment } from "../Redux/counter/actions";
import { Ddecrement, Dincrement } from "../Redux/dynamic/dyAction";

const Counter = ({ increment, decrement, count }) => {
    console.log(increment, "incre");
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}


const mapStateProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic ? (value) => dispatch(Dincrement(5)) : () => dispatch(increment(1)),

        decrement: ownProps.dynamic ? (value) => dispatch(Ddecrement(2)) : () => dispatch(decrement(1)),
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Counter)