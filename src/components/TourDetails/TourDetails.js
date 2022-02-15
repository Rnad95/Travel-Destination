import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer';
import './TourDetails.css'

function TourDetails(props) {
    const { id } = useParams();
    return (
        <>

            {props.data.map((element, idx) => {
                if (element.id === id)
                    return (
                        <div key={idx} className="details">

                            <h3>City: {element.name}</h3>
                            <img src={element.image} alt={element.name}></img>
                            <p>{element.info}</p>
                        </div>

                    )
            })}

            <Footer />
        </>
    )
}

export default TourDetails;