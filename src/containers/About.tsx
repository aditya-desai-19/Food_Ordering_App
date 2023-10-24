import React, { Component } from "react";
import UserClass from "../components/UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(): void {
        console.log("Parent componentDidMount");
    }

    render(): React.ReactNode {
        console.log("Parent render called")
        return (
            <div>
                <h2>Instafood is a platform where you can order food from your favourite restaurants</h2>
                <UserClass name="Aditya" location="Bangalore" position="Software Engineer" />
                <UserClass name="Ashish" location="Belagavi" position="Software Engineer" />
                <UserClass name="Avinash" location="Pune" position="Software Engineer" />
            </div>
        )
    }
}
// const About: React.FC = () => {
//     return (
//         <div>
//             <h2>Instafood is a platform where you can order food from your favourite restaurants</h2>
//             <UserClass name="Aditya" location="Bangalore" position="Software Engineer"/>
//         </div>
//     )
// }

export default About;