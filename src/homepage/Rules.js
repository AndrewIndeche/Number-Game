import React from "react";

class Rules extends React.Component {
    render() {

        const { list } = this.props;
        const cardStyle = {
            color: "black",
            backgroundColor: "#83D9DE",
            padding: "10px",
            fontFamily: "Sans-Serif",
            lineHeight: "26px",
            width: "600px",
            marginLeft: "15px"
        };
        return ( <>
            <div className = "card"
            style = { cardStyle } >

            <ol>
            <h2 > How to Play </h2>  <li > A random number is generated by the computer </li> 
             <li> You only have 3 chances to guess the number and beat the computer. </li>  
             <li> Dont worry, the computer will
            let you know
            if your guess was higher or lower than the random number. </li> 
            </ol> <h3 > Do you have what it takes to win ? </h3>  

            </div>     
            </>

        );
    }
}

export default Rules;

