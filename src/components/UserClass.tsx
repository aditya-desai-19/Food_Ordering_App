import React from "react";
//@ts-ignore
import styles from './styles/User.module.css';

type UserProps = {
    name: string,
    location: string,
    position: string
}

class UserClass extends React.Component<UserProps, { count: number }> {
    constructor(props: UserProps) {
        super(props);
        console.log(this.props.name + "Child constructor");

        this.state = {
            count: 0,
        }
    }

    componentDidMount(): void {
        console.log(this.props.name + "Child componentDidMount");
    }

    render(): React.ReactNode {
        const { name, location, position } = this.props
        const { count } = this.state;

        console.log(this.props.name + "Child render")

        const increaseCount = () => {
            this.setState({
                count: count + 1,
            })
        }
        return (
            <div className={styles.userCard}>
                <h2>Name: {name}</h2>
                <p>Location: {location}</p>
                <p>Job: {position}</p>
                <p>Count: {count}</p>
                <button onClick={increaseCount}>Increment</button>
            </div>
        )
    }
}

export default UserClass;