import React, { Component } from 'react';
import Image from '../images/information-icon.gif';
import { setDocumentTitle, setFavicon } from '../helpers/helpers';

class NotFound extends Component {
    componentDidMount() {
        setDocumentTitle('Page not found');
        setFavicon('/favicon.png');
    }

    render(){
        return (
            <div className="maxWidthContainer">
                <div className="notFoundContainer">

                    <div className="notFoundTitle">
                        <img src={Image} alt="Information Icon" />
                        <h2>This page cannot be displayed.</h2>
                    </div>

                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                </div>
            </div>
        )}
}

export default NotFound;