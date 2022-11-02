import eliminar from "./eliminar.png";
import { Link } from "react-router-dom";
function EliminarTool(props) {
    let url = props.path + "/delete/" + props.id;
    return (
        <Link to={url}>
            <img src={eliminar} alt="D" width={"20px"} />
        </Link>
    );
}

export default EliminarTool;
