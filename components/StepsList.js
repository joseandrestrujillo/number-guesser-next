import React from "react";
import { useContext } from "react";
import appContext from "../contexts/appContext";
import Answer from "./Answer";
import Question from "./Question";

const StepsList = () => { 
    const [state, setState] = useContext(appContext);
    return (
        <ul>
            {
                state.process.steps.map((value) => {
                    return(
                        <>
                            <Question value={value}/>
                            <Answer value={value} number={state.number}/>
                        </>
                    )
                })
            }
        </ul>
    )
}

export default StepsList;