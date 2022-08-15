import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <h1>404 page not found</h1>
            <Link to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;