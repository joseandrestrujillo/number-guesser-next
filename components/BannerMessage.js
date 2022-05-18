import React from "react";
import appContext from "../contexts/appContext";
import { useContext } from "react";

const BannerMessage = () => {
    const [state, setState] = useContext(appContext);
    

    return (
        <>
            <div className="pdiv">
                <p>
                    Este resultado se ha logrado mediante el algoritmo de busqueda binaria, haciendo un total de {state.process.iterations} iteraciones.
                </p>
            </div>
            <style jsx>
                {`
                    div{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-content:center;
                    }
                    p{
                        font-size: 1.5em;
                        max-width: 400px;
                        margin: 0 auto;
                        text-align: center;
                        color: #9f9ff3;
                        padding: 0;
                    }
                    .pdiv{
                        height:30vh;
                        max-height:190px;
                        width:100%;
                        max-width: 600px;
                        background-color: rgb(21, 21, 40);
                        margin: auto;
                        margin-top: 5vw;
                    }
                `}
            </style>
        </>
    )
}
export default BannerMessage;