import React from 'react'; 
import './OurTeam.css'; 

import NavBar from "../../../components/navBar/NavBar";
import Footer from '../../../components/footer/Footer';

export default function OurTeam(){
    return(
        <div className="our-team-page">
            <NavBar/>
            <img className="our-team-img" src={require("../../../assets/about/ourTeam.jpg")} alt="Our Team Background"/>
            <Footer/>
        </div>
    )
} 