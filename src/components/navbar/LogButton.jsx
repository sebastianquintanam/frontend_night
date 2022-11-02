import { Link } from "react-router-dom";

function LogButton(props) {
    let logButton = undefined;
    if (props.logged) {
        logButton = <button className="btn btn-outline-danger">LogOut</button>;
    } else {
        logButton = (
            <Link to={"/login"}>
                <button className="btn btn-outline-success">Login</button>
            </Link>
        );
    }
    return <div className="me-2 ms-5">{logButton}</div>;
}

export default LogButton;
