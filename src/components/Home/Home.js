import Header from "../Header/Header";
import data from "../../data/db.json"
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";
import './Home.css'
function Home() {
    return (
        <>
            {/* Show the Header, Tour, and Footer Component */}
            <Header />
            <Tours data={data} />
            <Footer />
        </>
    );

}

export default Home;