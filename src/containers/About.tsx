import React from "react";
import UserClass from "../components/UserClass";

const About: React.FC = () => {
    return (
        <div>
            <h2>Instafood is a platform where you can order food from your favourite restaurants</h2>
            <UserClass name="Aditya" location="Bangalore" position="Software Engineer"/>
        </div>
    )
}

export default About;