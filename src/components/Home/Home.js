import Header from "../Header/Header";
import data from "../../data/db.json"
import Tours from "../Tours/Tours";
import Tour from "../Tours/Tour/Tour";
import Footer from "../Footer/Footer";
import './Home.css'
function Home() {
    return (
        <>        <div className="Div">
            {/* Show the Header, Tour, and Footer Component */}
            {/* <Header /> */}


            <h2 className="h2">Welcome to Our Page</h2></div>
            <Tours Tour={Tour} />

        </>

    );

}

export default Home;