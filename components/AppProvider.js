import { useState } from "react";
import React from "react";
import AppContext from "../contexts/appContext";

/**
    Este componente provee del contexto a sus componentes hijos, el valor de este 
    componente sera un array de dos elementos:
    state: valor del estado actual, en este caso, el objeto con el numero y el proceso
        para conseguirlo
    setState: funcion para actualizar el valor de state en todo el contexto, sera
    utilizado cuando el formulario reciba la información de la API
 */

const AppProvider = (props) => {
    //El estado por defecto sera la salida del numero 1
    const [state, setState] = useState({
        number:1,
        "process":{
            "iterations":34,
            "steps":[5000000001,2500000001,1250000001,625000001,312500001,156250001,78125001,39062501,19531251,9765626,4882813,2441407,1220704,610352,305176,152588,76294,38147,19074,9537,4769,2385,1193,597,299,150,75,38,19,10,5,3,2,1]
        }
    
    });
    return (
        <>
            <AppContext.Provider value={[state, setState]}>
                {props.children}
            </AppContext.Provider>
        </>
    )

}

export default AppProvider;

