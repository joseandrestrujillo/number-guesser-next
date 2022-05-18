import { useState, useContext} from "react";
import appContext from "../contexts/appContext";
import React from "react";

const Formulario = () => {

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
            })
        
    }

    return (
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
    )
}
export default Formulario;