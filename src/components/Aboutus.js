import React from 'react';
import imagenFondo from '../assets/images/banner3.jpg';
import TopBar from './TopBar';

export function Aboutus(){
    return(
        <div className="w-100">
        <TopBar/>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Quienes Somos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Nuestro sitio web ofrecera una experiencia unica a la hora de experimentar una aventura extrema en la naturaleza 🌳 🌞 🌼 , donde ofrecemos servicios de guia en montañismo 🌄 🌈 rodeados de los mejores paisajes y accesorios necesarios 👓 🎥 🔦 para que este viaje de aventura sea inolvidable.
Nuestra audiencia apuntara a las personas mayores de edad que les encante la naturaleza y los deportes extremos y tener una conexión directa con la naturaleza.
</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View detail</a>
                </div>
            </div>
        </div>
        </div>
    )
}

