import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">

                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">
                        <img src="public/images/WhereNextTravelTempLogo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Where Next?
                    </a>
                </nav>
                {/* <Link className="navbar-brand" to='/'>Where Next?</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* Client wants link to Google form while custom form details are solidified. Hiding temporarily. */}
                        {/* <Link className="nav-item nav-link" to='/travelform'>Plan Your Trip</Link> */}
                        <a className="nav-item nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSc0vzqbNPQ0FmBkn0fWJJm-_yv_SHUu-YU98X5BI8PmqTIY-Q/viewform">Plan Your Trip</a>
                        <Link className="nav-item nav-link" to='/blogs'>Blog</Link>
                        <Link className="nav-item nav-link" to='/aboutme'>About Me</Link>
                        {/* <Link className="nav-item nav-link" to='https://www.instagram.com/wherenext_travel/'>Instagram</Link> */}
                        <a className="nav-item nav-link" href="https://www.instagram.com/wherenext_travel/">Instagram</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;