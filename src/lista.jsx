import {useState} from "react";

function Lista(){
    const [nombres, setNombres] = useState (["Ano", "Lucho", "Carla", "El papu", "Gabo"]);

    return (
        <div>
            <h3>Lista de nombres</h3>
            <ul>
                {nombres.map((nombre, index) =>(
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
            <button onClick={() =>setNombres(nombres.slice(0, -1))}>
                Eliminar Ultimo
            </button>
        </div>
    );
}

export default Lista;