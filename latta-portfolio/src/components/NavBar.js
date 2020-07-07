import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../NavBar.css"

function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item had-text-centered">
                        <Link to="/" id="home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            <div className="home">Home</div>
                        </Link>
                    </div>

                    <div className="navbar-item had-text-centered">
                        <Link to="/portfolio" id="portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;