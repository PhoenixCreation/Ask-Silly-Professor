import React,{ useContext, useState } from 'react'
import { UserContext } from '../context/Auth'
import "../css/components/navbar.css"

const Navbar = () => {
    const { user, isLoggedIn, login, signup, logout } = useContext(UserContext);

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
                        <img src="https://picsum.photos/200" alt="Random image failed"/>
                    </div>
                    <div className="navbar__left__heading__title">Ask Silly Professor</div>
                </div>
                <div className="navbar__left__options">
                    <div className="navbar__left__option active">Home</div>
                    <div className="navbar__left__option">Explore</div>
                    <div className="navbar__left__option">Forum</div>
                </div>
            </div>
            <div className="navbar__search__cont">
                <form action="/search" onSubmit={handleSearch} className="navbar__search__form" >
                    <input type="text" placeholder="Search anything..." className="navbar__search__field" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit" className="btn">🔍</button>
                </form>
            </div>
            {
                isLoggedIn === false ? (
                    <div className="navbar__right">
                        <button className="navbar__right__login btn" onClick={handleLogin}>Login</button>
                        <button className="navbar__right__signup btn" onClick={handleSignup}>Sign Up</button>
                    </div>
                ) : (
                    <div className="navbar__right">
                        <button className="navbar__right__logout btn" onClick={handleLogout}>Log Out</button>
                        <div className="navbar__right__user__cont">
                            <img src="https://picsum.photos/200?random=2" alt="user avatar to be shown here"/>
                        </div>
                    </div>
                )
            }
            <div className="navbar__theme__toggler">
                <label htmlFor="theme__toggler">
                    <input type="checkbox" name="theme" id="theme__toggler"/>
                    <div className="theme__toggler__bg">
                        <div className="theme__toggler__image"></div>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Navbar
