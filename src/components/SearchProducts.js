import React, { useState, useEffect, useRef } from 'react';

import noPoster from '../assets/images/no-poster.jpg';
import { getSearchProducts } from '../services/api';
import TopBar from './TopBar';

export function SearchProducts(){
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  const inputTag = useRef();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    // Petición Asincrónica al montarse el componente
     const products = await getSearchProducts(keyword)
     console.log(products)
     setProducts(products)

    
  }, [keyword]) 

  const searchProducts = async e => {
    e.preventDefault();
    const inputValue = inputTag.current.value;
    setKeyword(inputValue);
    inputTag.current.value = '';
  }

  return(
    <div className="w-100">
    <TopBar/>
    <div className="container-fluid">
      <div className="row my-4">
        <div className="col-12 col-md-6">
          {/* Buscador */}
          <form method="GET" onSubmit={searchProducts}>
            <div className="form-group">
              <label htmlFor="">Buscar por nombre:</label>
              <input ref={inputTag} type="text" className="form-control" />
            </div>
            <button className="btn btn-info">Buscar</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Productos para la palabra: {keyword}</h2>
        </div>
        {/* Listado de productos */}
        {
          products.length > 0 && products.map((product, i) => {
            return (
              <div className="col-sm-6 col-md-3 my-4" key={i}>
                <div className="card shadow mb-4">
                  <div className="card-header py-2">
                    <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <img 
                        src={product.image  ? product.image : noPoster}
                        alt={product.name} 
                        style={{ width: '90%',height:"200px" }} 
                      />
                    <p>{product.color.name}</p>
                    <p>{product.size.size}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      { 
        products.length === 0 && 
        <div className="alert alert-warning text-center">No se encontraron productos</div>
      }
    </div>
    </div>
  )
}

