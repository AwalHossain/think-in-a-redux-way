
// interface Value {
//     value: Number
// }

import Button from "./Button"

const Counter = ({ increment, decrement, id, count }) => {
    // const [state, setState] = useState(0);

    // const increment = ()=> {
    //     setState(prevCount => prevCount +1)
    // };
    // const decrement = () =>{

    //     setState(prevCount => prevCount -1);
    // }

    return (
        <div>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                <div
                    className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div className="text-2xl font-semibold" id="counter">{count}</div>
                    <div className="flex space-x-3">
                        <Button handler={()=> increment(id)} >Increment</Button>
                        <Button handler={()=> decrement(id)} >Decrement</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter