import React from "react";
import appContext from "../contexts/appContext";
import { useContext } from "react";

const ShowNumber = () => {
    const [state, setState] = useContext(appContext);
    

    return (
        <>
            {state.number}
        </>
    )
}
export default ShowNumber;