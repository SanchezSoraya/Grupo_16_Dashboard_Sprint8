import React, { useEffect, useState } from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import CardsInfo from './CardsInfo';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import { getColors, getProducts, getSizes, getUsers } from '../services/api';

function SideBar(){
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
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
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
                <Route path="/ContentRowMovies">
                    <CardsInfo cartProps={cartProps} products={products} />
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