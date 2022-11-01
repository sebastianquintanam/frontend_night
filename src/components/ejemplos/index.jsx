import { Link } from "react-router-dom";

function EjemplosIndex(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/ejemplos/clase"}>
                        Ir a ejemplo componente CLASE
                    </Link>
                </li>
                <li>
                    <Link to={"/ejemplos/funcion"}>
                        Ir a ejemplo componente FUNCION
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default EjemplosIndex;
