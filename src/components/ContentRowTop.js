import React, { useEffect, useState } from 'react';
import ContentRowCenter from './ContentRowCenter';
import CardsInfo from './CardsInfo';
import { ListProducts } from './ListProducts';
import { getColors, getProducts, getSizes, getUsers } from '../services/api';

function ContentRowTop(){

	const [cartProps, setCartProps] = useState([])
  const [products, setProducts] = useState([])

	useEffect(()=>{
			fetchData()
		 },[])

	 const fetchData = async()=>{
		 const promises = [getProducts(), getUsers(), getColors(), getSizes()] // lista de promesas para obtener informacion de products, usuarios
		 const response = await Promise.allSettled(promises) // ejecutar todas promesas a la vez
						 
		 setCartProps([
			 {
				 title: 'Productos',
				 color: 'primary',
				 cuantity: response[0].value.count.toString(),
				 icon:'fas fa-tshirt',
			 },
			 {
				 title: 'Users',
				 color: 'primary',
				 cuantity: response[1].value.count.toString(),
				 icon:'fa-duotone fa-user',
			 }, 
			 {
				 title: 'colors',
				 color: 'primary', 
				 cuantity: response[2].value.count.toString(),
				 icon:'fas fa-pen-nib',
			 },
			 {
				 title: 'sizes',
				 color: 'primary', 
				 cuantity: response[3].value.count.toString(),
				 icon:'fas fa-ruler-combined',
			 }
		 ])
		 setProducts(response[0].value.products)
		}

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard Turisfront</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<CardsInfo cartProps={cartProps} />
					<ContentRowCenter />
					{/* <Chart /> */}

					{/* lista de productos */}
					<ListProducts products={products} /> 

	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;