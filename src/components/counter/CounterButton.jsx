export default function CounterButton({by, incrementMethod, decrementMethod}) {

    //useState return us a array of 2 value [0,f]
    // [0,f] where first element is the value and second is the function for value

    //here we are deconstructing the array

    function incrementCounterFunction() {
        incrementMethod(by)
    }

    function decrementCounterFunction() {
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            <div>
                {/* here if we introduces (), paranthesis in function then the function would be called 
                when we will click the button, it will call for several times 
                this is because the onClick is mapped to a function call and then the button would not work

                We want to map onClick to function itself
                */}
                <button className="counterButton" onClick={incrementCounterFunction}>+{by}</button>
                <button className="counterButton" onClick={decrementCounterFunction}>-{by}</button>
            </div>
        </div>
    )

}

// CounterButton.propTypes = {
//     by : PropTypes.number
// }

// CounterButton.defaultProps = {
//     by : 1
// }