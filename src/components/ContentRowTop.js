import React, { useEffect, useState } from 'react';
import ContentRowCenter from './ContentRowCenter';
import CardsInfo from './CardsInfo';
import { ListProducts } from './ListProducts';
import { getColors, getProducts, getSizes, getUsers, getLastUser } from '../services/api';

function ContentRowTop({cartProps, products}){
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