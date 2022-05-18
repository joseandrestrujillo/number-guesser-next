import { useState, useContext} from "react";
import { useRouter } from "next/router";
import appContext from "../contexts/appContext";
import React from "react";

const Formulario = () => {
    const router = useRouter()
    const [number, setNumber] = useState(1)
    const [state, setState] = useContext(appContext)

    const handleInputChange = (e) => {
        setNumber(e.target.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        await fetch(`http://localhost:3000/api/${number}`)
            .then(res => res.json())
            .then(res => {
                setState(res)
                router.push("/guessnumber")
            })
        
    }

    return (
        <>
            <div><h2>Piensa en un número...</h2></div>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="number" 
                    name="number" 
                    id="number" 
                    min={1} 
                    max={10000000000}
                    placeholder = {number}    
                    onChange = {handleInputChange}
                />
                <button type="submit">
                    Enviar
                </button>
            </form>
            <style jsx>
                {`
                    div{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                    h2{
                        font-size: 3em;
                        text-align: center;
                        color: #9f9ff3;
                        margin: 0;
                        margin-top: 2vw;
                        margin-bottom: .5em;
                        padding: 0;
                    }
                    form{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        margin-top:3em;
                        margin: 0;
                    }
                    input{
                        font-size: 2em;
                        text-align:center;
                        border: none;
                        color: #5C5CED;
                        width:60%;
                        max-width: 300px ;
                        border-radius: 15px 0 0 15px;
                        background-color: #ddd;
                    }
                    input[type=number]::-webkit-inner-spin-button, 
                    input[type=number]::-webkit-outer-spin-button { 
                        -webkit-appearance: none; 
                        margin: 0; 
                    }
                    button{
                        font-size: 1em;
                        width:20%;
                        color: #5C5CED;
                        max-width: 100px;
                        border-radius: 0 15px 15px 0;
                        border: none;
                        background-color: #ccc;
                    }
                `}
            </style>
        </>
    )
}
export default Formulario;