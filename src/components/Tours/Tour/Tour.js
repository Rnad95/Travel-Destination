
function Tour(props) {
    return (<>
        {props.data.map((element, idx) => {
            return (
                <div key={idx} className="tours">
                    <h3>City: {element.name}</h3>
                    <h4>Price: {element.price}</h4>
                    <img src={element.image} alt={element.name}></img>
                    <br></br>
                    <hr />
                    <p>{element.info}</p>

                </div>
            )
        })}


    </>);
}

export default Tour;