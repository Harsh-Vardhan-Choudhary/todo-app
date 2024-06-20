import { useParams, Link } from "react-router-dom"

export default function WelcomeComponent() {

    const params = useParams()      //here it will return an object
    const {username} = useParams()
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                {/* Your todos - <a href="/todos"> Go </a> */}
                Your todos - <Link to= "/todos"> Go </Link>
            </div>
        </div>
    )
}