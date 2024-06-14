import './counter.css'

export default function Counter() {

    function incrementCounterFunction() {
        console.log('increment clicked')
    }

    return (
        <div className="Counter">
            <span className="count">0</span>
            <div>
                {/* here if we introduces (), paranthesis in function then the function would be called 
                when we will click the button, it will call for several times 
                this is because the onClick is mapped to a function call and then the button would not work

                We want to map onClick to function itself
                */}
                <button className="counterButton" onClick={incrementCounterFunction}>+1</button>
            </div>
        </div>
    )
}