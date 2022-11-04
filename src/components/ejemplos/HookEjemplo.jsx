import React, { useState } from "react";

function HookEjemplo(props) {
    const [count, setCount] = useState(0);
    let onclickfunc = function () {
        setCount(count + 1);
    };
    return (
        <div className="d-flex text-center mx-auto">
            <p>Has clikeado {count} veces</p>
            <button className="btn btn-success" onClick={onclickfunc}>
                Clikeame
            </button>
        </div>
    );
}

export default HookEjemplo;
