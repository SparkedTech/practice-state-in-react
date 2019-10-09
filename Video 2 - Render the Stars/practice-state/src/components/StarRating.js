import React, { Component } from "react";
import Star from './Star';



class StarRating extends Component {


  // 1. Initialize a 'rating' state
state = {
  rating: ''
}

  // 2. Write a function that returns 5 Star components
fiveStar = () => {
let myStars = [];
 for(let i =1; i<=5; i++) {
   myStars.push(i);
  return myStars;
}

}




  // 3. Write an event handler that updates the rating state
  //    Pass the function to a Star component via props
handleRating = (props) => {
this.setState(prevState => ({
  rating: prevState
}));
}

  render() {
    return (
      <ul className="course--stars">
        {/* 4. Render the Star components */}
      <Star stars={this.fiveStar}/>
      </ul>
    );
  }
}

export default StarRating;