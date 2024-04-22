import React from 'react';
import { Link } from 'react-router-dom'


const LandingPage = () => {

    const renderNavButtons = () => {

    }

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to='/' className="brand-logo left"> Home</Link>
                <ul className='right'>
                    {renderNavButtons()}
                </ul>
            </div>
        </nav>
    )

}

export default LandingPage;