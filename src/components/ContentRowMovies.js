import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';
import { getProducts, getUsers, getColors } from '../services/api';

// /*  Cada set de datos es un objeto literal */

// /* <!-- Movies in DB --> */


// let moviesInDB = {
//     title: 'Movies in Data Base',
//     color: 'primary', 
//     cuantity: 21,
//     icon: 'fa-clipboard-list'
// }

// /* <!-- Total awards --> */

// let totalAwards = {
//     title:' Total awards', 
//     color:'success', 
//     cuantity: '79',
//     icon:'fa-award'
// }

// /* <!-- Actors quantity --> */

// let actorsQuantity = {
//     title:'Actors quantity' ,
//     color:'warning',
//     cuantity:'49',
//     icon:'fa-user-check'
// }


// let cartPropss = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    const [cartProps, setCartProps] = useState([])
     
     useEffect(()=>{
         fetchData()
        },[])

      const fetchData = async()=>{
        const promises = [getProducts(), getUsers(), getColors()] // lista de promesas para obtener informacion de products, usuarios
        const response = await Promise.allSettled(promises) // ejecutar todas promesas a la vez
        
        console.log(response)
        
        setCartProps([
          {
            title: 'Productos',
            color: 'primary',
            cuantity: response[0].value.count.toString(),
            icon:'fa-user-check',
          },
          {
            title: 'Users',
            color: 'primary',
            cuantity: response[1].value.count.toString(),
            icon:'fa-user-check',
          }, 
          {
            title: 'colors',
            color: 'primary', 
            cuantity: response[2].value.count.toString(),
            icon:'fa-user-check',
          }
        ])
       }

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;