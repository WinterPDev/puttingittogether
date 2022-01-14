import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }
    
    render(){
        const {firstName,lastName,age,hairColor} = this.props;
        const addAge = () => this.setState({age: this.state.age +1})
        return(
            <div>
                <h1>Last Name: {lastName}</h1>
                <p>First Name: {firstName}</p>
                <p>Age: {this.state.age}</p>
                <p> Hair Color: {hairColor}</p>
                <button onClick={addAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;