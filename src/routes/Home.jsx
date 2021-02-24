import React, { useEffect, useRef } from 'react'
import {Link} from "react-router-dom"
import DegreeCap from '../components/svgs/DegreeCap'
import Knowledge from '../components/svgs/Knowledge'
import SillyProfessor from '../components/svgs/SillyProfessor'
import "../css/routes/home.css"


const Home = () => {
    return (
        <div className="home">
            <div className="home__first__cont">
                <div className="home__first">
                    <div className="home__first__left">
                        <div className="home__first__left__card">
                            <h1 className="home__first__left__card__heading">
                                Does your professors also bores you?
                            </h1>
                            <div className="home__first__left__card__details">
                                Is your professor is also like this dude who always bores you with the long lectures
                                and also don't have that much knowledge in topic? Then ask them silly questions which will
                                make them think.
                            </div>
                            <Link to="/explore" className="btn home__first__left__card__explore">
                                Explore
                            </Link>
                        </div>
                    </div>
                    <div className="home__first__right">
                        <SillyProfessor className="home__first__professor__svg" />
                        <div className="home__first__right__quote">
                            Hey, Jimmy! Pay attension to the class or leave it.
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__second__cont">
                <div className="home__second">
                    <div className="home__second__left">
                        <DegreeCap className="home__second__degreecap" />
                    </div>
                    <div className="home__second__right">
                        <h2 className="home__second__right__heading">
                            Show your knowledge in your topic
                        </h2>
                        <div className="home__second__right__details">
                            Find the topic you think you are good in and surf the questions and discussions or
                            start a new question or discussion. Make sure you have handy proof of whta you are saying. keep learning.
                        </div>
                        <Link to="/explore" className="btn home__second__right__explore">
                            Explore
                        </Link>
                    </div>
                </div>
                <div className="home__second">
                    <div className="home__second__left">
                        <DegreeCap className="home__second__degreecap" />
                    </div>
                    <div className="home__second__right">
                        <h2 className="home__second__right__heading">
                            Gain knowledge by asking Questions
                        </h2>
                        <div className="home__second__right__details">
                            When you ask questions and find answers you remember it better then anything. Also answering 
                            others questions answer will also make you little better in that topic each time you answer something.
                        </div>
                        <Link to="/explore" className="btn home__second__right__explore">
                            Questions
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
