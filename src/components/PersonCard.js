import React, {Component} from 'react';

// class PersonCard extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         age: props.age
    //     }
    // }
    
    const PersonCard = props => {
        // const {firstName,lastName,age,hairColor} = this.props;
        // const addAge = () => this.setState({age: this.state.age +1})
        return(
            <div>
                <h1>Last Name: {props.lastName}</h1>
                <p>First Name: {props.firstName}</p>
                <p>Age: {props.age}</p>
                <p> Hair Color: {props.hairColor}</p>
                {/* <button onClick={addAge}>Birthday Button for {firstName} {lastName}</button> */}
            </div>
        )
    }


export default PersonCard;