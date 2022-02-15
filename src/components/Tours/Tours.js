import './Tours.css'
import Tour from './Tour/Tour';
import Footer from '../Footer/Footer';
import data from '../../data/db.json';
import Header from '../Header/Header';
// import data from '../../data/db.json'
function Tours(props) {
    return (<>

        <Tour data={data} />
        <Footer />

    </>);
}

export default Tours;