import editar from "./editar.png";
import { Link } from "react-router-dom";

function ActualizarTool(props) {
    let url = props.path + "/update/" + props.id;
    return (
        <Link to={url}>
            <img src={editar} alt="E" width="20px" />
        </Link>
    );
}

export default ActualizarTool;
