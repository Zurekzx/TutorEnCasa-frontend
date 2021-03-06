import React, { Fragment } from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { NavbarLogin } from './index';

const navbar = () => {
        const login = useSelector(state => state.login);
        return(    
        <nav >
            <div className="row">
                <div className="col-sm-1  center">
                    <Link to="/" className="noPadding">
                        <img style={{width: "50px", height: "50px"}} src={'/public/Images/logo.png'} />
                    </Link>
                </div>
                <div className="col" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <ul className="nav" >
                        <Link to="/" className="nav-link">
                            <li><h6 className="link">Inicio</h6></li>
                        </Link>
                        <Link to="/nosotros" className="nav-link">
                            <li><h6 className="link">¿Quiénes somos?</h6></li>
                        </Link> 
                        <Link to="/tutorias" className="nav-link">
                            <li><h6 className="link">Tutorías</h6></li>
                        </Link>
                    </ul>
                </div>
                <div className="col" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {login ? 
                        <NavbarLogin/>   
                        : 
                        <ul className="nav">
                            <Link to="/registro" className="nav-link"> 
                                <li><h6 className="link">Registrarse</h6></li>
                            </Link>  
                            <Link to="/inicio-sesion" className="nav-link">
                                <li><h6 className="link">Iniciar sesión</h6></li>
                            </Link>        
                        </ul>         
                    }          
                </div>
                <div className="col-sm-1"></div>
            </div>   
        </nav>
        )
}

export default navbar;