import React from 'react';
import SmallCard from './SmallCard';

function CardsInfo({cartProps}){
    return (
        <div className="row">         
            {cartProps.map( (movie, i) => {
                return <SmallCard {...movie} key={i}/>            
            })}
        </div>
    )
}

export default CardsInfo;