import { useState } from "react";
import React from "react";
import AppContext from "../contexts/appContext";

const AppProvider = (props) => {
    const [state, setState] = useState({number:1});
    return (
        <>
            <AppContext.Provider value={[state, setState]}>
                {props.children}
            </AppContext.Provider>
        </>
    )

}

export default AppProvider;