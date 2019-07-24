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

                <div className="searchFormContainer">
                    <h1>Where will you go next?</h1>
                    <form>
                        <input type="text" className="searchTextBox" name="place" placeholder="Start typing..."/>
                        <button type="button" className="searchBtn">Go</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header
