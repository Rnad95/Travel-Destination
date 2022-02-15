// import data from "../../data/db.json"
import './Tours.css'
function Tours(props) {
    return (<>
        {props.data.map(element => {
            return (
                <div className="Tours">
                    <h3>City: {element.name}</h3>
                    <img src={element.image} alt={element.name}></img>
                    <hr />
                </div>
            )
        })}


    </>);
}

export default Tours;