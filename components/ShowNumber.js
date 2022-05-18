import React from "react";
import appContext from "../contexts/appContext";
import { useContext } from "react";
import { useRouter } from "next/router";

const ShowNumber = () => {
    const [state, setState] = useContext(appContext);
    const router = useRouter()

    const handleButtomClick = () => {
        router.push("/guessnumber/steps")
    }

    return (
        <>
            <div>
                <h2>Tu número es</h2>
                <h2 className="number">{state.number}</h2>
                <button onClick={handleButtomClick}>Ver pasos</button>
            </div>
            <style jsx>
                {`
                    div{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-content:center;
                    }
                    h2{
                        font-size: 3em;
                        text-align: center;
                        color: #9f9ff3;
                        margin: 0;
                        margin-top: 2vw;
                        padding: 0;
                    }
                    .number{
                        font-size: 10em;
                        margin: 0;
                        margin-bottom: .05em;
                    }
                    button{
                        font-size: 3.5em;
                        width:70%;
                        max-width: 400px;
                        padding:.3em;
                        color: #5C5CED;
                        border-radius: 15px;
                        margin: 0 auto;
                        border: none;
                        background-color: #ccc;
                        cursor:pointer;
                    }
                `}
            </style>
        </>
    )
}
export default ShowNumber;