import Table from "./Table";
import CreateButton from "../table/CreateBotton";
import SearchBar from "../table/SearchBar";
import { useState } from "react";

function MainPage(props) {
    const [dataForTable, setDataforTable] = useState(props.data);
    return (
        <div>
            <div className="d-flex text-center mx-auto w-100">
                <CreateButton path={props.path} />
                <SearchBar
                    data={props.data}
                    setDataforTable={setDataforTable}
                    columns={props.columns}
                />
            </div>
            <Table
                data={dataForTable}
                path={props.path}
                name={props.name}
                columns={props.columns}
                columnsAlias={props.columnsAlias}
                tools={props.tools}
            />
        </div>
    );
}
export default MainPage;

{
    /* <Table
    data={datosTabla}
    path={"/usuarios"}
    name={"Tabla de Usuarios"}
    columns={["id", "firstName", "email", "username", "password"]}
    columnsAlias={["ID", "Nombre", "Correo", "Usuario", "Contrasena"]}
    tools={["update", "delete"]}
/>; */
}
