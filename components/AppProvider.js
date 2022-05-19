import { useState } from "react";
import React from "react";
import AppContext from "../contexts/appContext";

const AppProvider = (props) => {
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

