function Cell(props) {
    //props.value
    //props.index
    if (props.index === 0) {
        return <th scope="row">{props.value}</th>;
    }
    return <td>{props.value}</td>;
}

export default Cell;
