// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/"> Category : </Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/">Politics</Link>
//                     </li>      
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
//                     </li>      
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainement</Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
//                     </li>                    
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/lifestyle">lifestyle</Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link active" aria-current="page" to="/crime">Crime</Link>
//                     </li>
                    
//                 </ul>
                
//                 </div>
//             </div>
//             </nav>
//       </div>
//     )
//   }
// }



import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">News Categories</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Politics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lifestyle">Lifestyle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crime">Crime</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
