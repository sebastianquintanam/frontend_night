function Header(props) {
    //props.columns={props.columnsAlias}
    //props.tools={props.tools}
    let toolHeader = undefined;
    if (props.tools && props.tools.length > 0) {
        toolHeader = <th scope="col">Tools</th>;
    }
    return (
        <thead>
            <tr>
                {props.columns.map(function (value, index) {
                    return <th scope="col">{value}</th>;
                })}
                {/* 
                <th scope="col">#      </th>
                <th scope="col">First  </th>
                <th scope="col">Last   </th>
                <th scope="col">Handle </th> */}
                {toolHeader}
            </tr>
        </thead>
    );
}

export default Header;
