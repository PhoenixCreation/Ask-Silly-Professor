import React,{ useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/Auth'
import { Link, useLocation } from "react-router-dom"
import "../css/components/navbar.css"

const Navbar = () => {
    const { user, isLoggedIn, login, signup, logout } = useContext(UserContext);

    const location = useLocation()

    const [currentPage, setCurrentPage] = useState("home")

    useEffect(() => {
        if (location.pathname === "/") {
            setCurrentPage("home")
        }
        else if(location.pathname.includes("explore")){
            setCurrentPage("explore")
        }
        else if(location.pathname.includes("forum")){
            setCurrentPage("forum")
        }
        else{
            setCurrentPage(location.pathname)
        }
    },[location])

    const [searchQuery, setSearchQuery] = useState("")

    const handleLogin = () => {
        login("login","password")
    }

    const handleSignup = () => {
        signup("signup","password")
    }

    const handleLogout = () => {
        logout()
    }

    const handleSearch = (e) => {
        e.preventDefault()
        // TODO: handle search throughout the website
        console.log(`Search for ${searchQuery}`)
        setSearchQuery("")
    }

    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__left__heading">
                    <div className="navbar__left__heading__icon">
                        <img src="https://picsum.photos/200" alt="Random pic failed"/>
                    </div>
                    <Link to="/" className="navbar__left__heading__title">Ask Silly Professor</Link>
                </div>
                <div className="navbar__left__options">
                    <Link to="/" className={currentPage === "home" ? "navbar__left__option active" : "navbar__left__option"}>Home</Link>
                    <Link to="/explore" className={currentPage === "explore" ? "navbar__left__option active" : "navbar__left__option"}>Explore</Link>
                    <Link to="/forum" className={currentPage === "forum" ? "navbar__left__option active" : "navbar__left__option"}>Forum</Link>
                </div>
            </div>
            <div className="navbar__search__cont">
                <form action="/search" onSubmit={handleSearch} className="navbar__search__form" >
                    <input type="text" placeholder="Search anything..." className="navbar__search__field" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit" className="navbar__search__button btn">🔍</button>
                </form>
            </div>
            {
                isLoggedIn === false ? (
                    <div className="navbar__right">
                        <button className="navbar__right__login btn" onClick={handleLogin}>Login</button>
                        <button className="navbar__right__signup btn" onClick={handleSignup}>Signup</button>
                    </div>
                ) : (
                    <div className="navbar__right">
                        <div className="navbar__right__user__cont">
                            <img src="https://picsum.photos/200?random=2" alt="user avatar to be shown here"/>
                            <div className="navbar__user__options">
                                <Link to="/profile" className="navbar__user__option">Profile</Link>
                                <button onClick={handleLogout} className="navbar__user__option">Log out</button>
                                <Link to="/help" className="navbar__user__option">Help</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar
