import React from 'react'

import plane from '../images/plane.PNG'

const Header = (props) => {

    return (
        <div className={props.bannerImgClass ? props.bannerImgClass : 'boracayBanner'}>
            <div className="container">
                <div className="siteTitle">
                    <img src={plane} alt="Plane logo"/>
                    <p>turistado</p>
                </div>

                <div className="searchForm">
                    <h1>Where will you go next?</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
