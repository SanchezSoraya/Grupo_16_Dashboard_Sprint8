import React from 'react';
import SmallCard from './SmallCard';

function CardsInfo({cartProps}){
    return (
        <div className="row">         
            {cartProps.map((row, i) => {
                return <SmallCard {...row} key={i}/>            
            })}
        </div>
    )
}

export default CardsInfo;