const Question = ({value}) => {
    return(
        <>
            <li>¿Es {value}?</li>
            <style jsx>
                {`
                    li{
                        background-color: rgb(30, 30, 49);
                        color: #6e6eb6;;
                    }
                `}
            </style>
        </>
    )
}

export default Question;