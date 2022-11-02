import Table from "../table/Table";
import getData from "../../js/getData";

function UsuariosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    //procesar datos
    return (
        <div>
            <h3>Usuarios</h3>
            <p>Bienvenidos a la pagina de administracion de usuarios</p>
            <Table
                data={datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={["id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                ]}
                tools={["update", "delete"]}
            />
            {/* <div className="d-flex">
                <div className="col-6">
                    <Table />
                </div>
                <div className="col-6">
                    <Table />
                </div>
            </div> */}
        </div>
    );
}

export default UsuariosIndex;
