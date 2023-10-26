import React, { Component } from "react";
import UserClass from "../components/UserClass";

type AboutProps = {}
type AboutState = {
    usersInfo: object
}

class About extends Component<AboutProps, AboutState> {
    constructor(props) {
        super(props);

        this.state = {
            usersInfo: {},
        }
    }

    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        const data = await fetch(url);
        const json = await data.json();
        console.log(json) 
        this.setState({usersInfo:json[0]});
    }

    

    render(): React.ReactNode {
        console.log(this.state.usersInfo)
        return (
            <div>
                <h2>Instafood is a platform where you can order food from your favourite restaurants</h2>
                <UserClass name={this.state.usersInfo.name} location="Bangalore" position="Software Engineer" />
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