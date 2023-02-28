import React, {Component} from "react";

const Card = (props) => {
    const {id, name, email} = props

    if (false) {
        throw new Error ('NOOOOOOOPE')
    } 
    return (
        
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="ha" src={`https://robohash.org/${id}?200x200` }/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;