import React, { useEffect, useState } from 'react';
import image from '../assets/images/mountain.png';
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import CardsInfo from './CardsInfo';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import { getColors, getProducts, getSizes, getUsers, getLastUser, getLastProduct } from '../services/api';
import { LastRegisters } from './LastRegisters';

function SideBar(){
    const [cartProps, setCartProps] = useState([])
    const [products, setProducts] = useState([])
    const [lastRegisters, setLastRegisters] = useState([])

	useEffect(()=>{
			fetchData()
		 },[])

	 const fetchData = async()=>{
		 const promises = [getProducts(), getUsers(), getColors(), getSizes(), getLastUser(), getLastProduct()] // lista de promesas para obtener informacion de products, usuarios
		 const response = await Promise.allSettled(promises) // ejecutar todas promesas a la vez
			console.log(response)			 
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
         setLastRegisters([
            {
              nameTable: "Users",
              id: response[4].value.id,
              name: response[4].value.first_name
            },
            {
              nameTable: "Products",
              id: response[5].value.id,
              name: response[5].value.name
            }
          ])
		}

    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Turisfront</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/lastRegisters">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Ultimos Registros de Tablas</span></Link>
                </li>
                
                {/*<!-- Buscador -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search"></i>
                        <span>Search a products</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper  cartProps={cartProps} products={products}/>
                </Route>
                {/* <Route path="/GenresInDb">
                    <GenresInDb />
                </Route> */}
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/lastRegisters">
                    <LastRegisters lastRegisters={lastRegisters} />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;