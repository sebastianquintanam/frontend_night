import React from "react";

class ComponenteClase extends React.Component {
    render() {
        return (
            <div>
                <h2>Este es un componente de tipo CLASE</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, non accusantium sunt culpa facere consequuntur.
                    Ipsa voluptatibus corrupti quia soluta magnam rem ipsam modi
                    iusto saepe, odio delectus consequatur repellendus?
                </p>
                <br />
                <p>El mensaje es: {this.props.msn}</p>
            </div>
        );
    }
}

export default ComponenteClase;
