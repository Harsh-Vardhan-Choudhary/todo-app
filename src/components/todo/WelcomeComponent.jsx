import { useParams, Link } from "react-router-dom"

// import axios from 'axios'

import { useState } from "react"
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService"

export default function WelcomeComponent() {

    const[message, setMessage] = useState(null)

    function callHelloWorldRestApi() {
        console.log('called')

        // retrieveHelloWorldBean()
        //     .then( (response) => successfulResponse(response) )
        //     .catch( (error) => errorResponse(error) )
        //     .finally( () => console.log('cleanup') )

        retrieveHelloWorldPathVariable('Harsh')
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log('cleanup') )

        // axios.get('http://localhost:8080/hello-world')
        //     .then( (response) => successfulResponse(response) )
        //     .catch( (error) => errorResponse(error) )
        //     .finally( () => console.log('cleanup') )

        // axios.get('http://localhost:8080/hello-world-bean')
        //     .then( (response) => successfulResponse(response) )
        //     .catch( (error) => errorResponse(error) )
        //     .finally( () => console.log('cleanup') )
    }

    function successfulResponse(response) {
        console.log(response)
        //setMessage(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    const params = useParams()      //here it will return an object
    const {username} = useParams()
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                {/* Your todos - <a href="/todos"> Go </a> */}
                Your todos - <Link to= "/todos"> Go </Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}