import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Nav({ user }) {
    const [tab, setTab] = useState('/');

    useEffect(() => {
        setTab(window.location.pathname)
        let navSelected = document.querySelectorAll(".nav-selected")[0];
        

    }, [tab])

    let ClickModule = (event) => {
        setTab(event.target.attributes.href.value);
    }

    return (
        <nav>
            <div>
                <Link to='/' className={`nav-item ${tab === '/' ? "nav-selected" : ""}`} onClick={ClickModule}>Home</Link>
                <Link to='/test' className={`nav-item ${tab === '/test' ? "nav-selected" : ""}`} onClick={ClickModule}>test page</Link>
                <Link to='/newFriend' className={`nav-item ${tab === '/newFriend' ? "nav-selected" : ""}`} onClick={ClickModule}>New Friend</Link>
            </div>

            <div>
                {user ?
                    <>
                        <Link to='/profile' className={`nav-item ${tab === '/Profile' ? "nav-selected" : ""}`} onClick={ClickModule}>user.Email</Link>
                        <Link to='/' className={`nav-item ${tab === '/' ? "nav-selected" : ""}`} onClick={ClickModule}>Log Out</Link>
                    </>
                    :
                    <>
                        <Link to='/login' className={`nav-item ${tab === '/login' ? "nav-selected" : ""}`} onClick={ClickModule}>Log In</Link>
                        <Link to='/signUp' className={`nav-item ${tab === '/signUp' ? "nav-selected" : ""}`} onClick={ClickModule}>Sign Up</Link>
                    </>
                }
            </div>
        </nav >
    )
}

export default Nav;