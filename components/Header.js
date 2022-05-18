import React from "react";
import { useRouter } from "next/router";


const Header = () => {
    const router = useRouter()
    const handleH1Click = (e) => {
        router.push("/");
    }

    return(
        <>
            <header>
                <h1 onClick={handleH1Click}>Adivino de números</h1>
            </header>
            <style jsx>
                {`
                    header{
                        background-color: #ddd;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                    h1{
                        display: inline-block;
                        color: #5C5CED;
                        font-family: "Helvetica";
                        font-size: 2em;
                        font-weight: 600;
                        padding: .5em;
                        margin:0;
                        cursor:pointer;
                    }
                `}
            </style>
        </>
    )
}

export default Header;