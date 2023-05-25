import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className='navbar-brand' to={'/'} > Reforzamiento </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                      <NavLink to={'/'} className={ ({ isActive}) => `nav-link ${ isActive ? 'active' : ''}` } >
                        Home
                      </NavLink>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header