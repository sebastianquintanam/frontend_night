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
                <li>
                    <Link to={"/ejemplos/hook"}>Ir a ejemplo Hooks</Link>
                </li>
            </ul>
        </div>
    );
}

export default EjemplosIndex;
