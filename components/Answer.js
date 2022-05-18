const Answer = ({value, number}) => {
    return(
        <>
            <li>{value === number ? "SI" : value < number ? "No, es mayor" : "No, es menor"}</li>
            <style jsx>
                {`
                    li{
                        float:right;
                        background-color: #ccc;
                        color: #5C5CED;
                    }
                `}
            </style>
        </>
    )
}

export default Answer;