import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Header(props) {

   const handleCustomMode = (e) => {
      props.passMode(e.target.value)
   }
   return (
      <div className='mb-5'>
         <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">{props.title}</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>
                  </ul>
                  <div className="row me-2">
                     <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger" value="danger" onClick={handleCustomMode}>Red</button>
                        <button type="button" className="btn btn-warning" value="warning" onClick={handleCustomMode}>Yellow</button>
                        <button type="button" className="btn btn-success" value="success" onClick={handleCustomMode}>Green</button>
                     </div>
                  </div>
                  <div className="form-check form-switch">
                     <input className="form-check-input" onChange={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                     <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'}Mode</label>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   )
}

Header.propTypes = {
   title: PropTypes.string.isRequired,
   mode: PropTypes.string.isRequired
}

Header.defaultProps = {
   title: 'Navbar',
   mode: 'light'
}