import Header from "./Header";
import Body from "./Body";

function Table(props) {
    //props.data={datosTabla}
    //props.name={"Tabla de Usuarios"}
    //props.columns={["id", "firstName", "email", "username", "password"]}
    //props.columnsAlias={[]}
    //props.tools={["update", "delete"]}
    //props.path
    return (
        <div className="mx-5">
            <table class="table">
                <caption>{props.name}</caption>
                <Header columns={props.columnsAlias} tools={props.tools} />
                <Body
                    path={props.path}
                    data={props.data}
                    columns={props.columns}
                    tools={props.tools}
                />
            </table>
        </div>
    );
}

export default Table;
