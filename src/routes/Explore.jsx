import React from 'react'
import "../css/routes/Explore.css"

const Explore = () => {
    return (
        <div className="explore">
            <div className="explore__self">
                this is self part where your questions and answers will be shown
            </div>
            <div className="explore__main">
                this is the main part where the main questions will be shown and this will be very long list of questions asked in vaious channels.
            </div>
            <div className="explore__suggested">
                this is the part where we suggest the different channels for this.
            </div>
        </div>
    )
}

export default Explore
