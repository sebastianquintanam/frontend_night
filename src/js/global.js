let estadoPrincipal = {
    name: "",
    auhtenticated: false,
};

function setEstadoPrincipal(newState) {
    estadoPrincipal = newState;
    return;
}

export { estadoPrincipal, setEstadoPrincipal };