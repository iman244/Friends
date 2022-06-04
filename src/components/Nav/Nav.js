import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Nav({ user }) {
    const [tab, setTab] = useState('/');

    useEffect(() => {
        setTab(window.location.pathname)
    }, [])

    return (
        <nav>
            <div>
                <Link to='/' className={`nav-item ${tab === '/' ? "nav-selected" : ""}`} onClick={() => setTab('/')}>Home</Link>
                <Link to='/test' className={`nav-item ${tab === '/test' ? "nav-selected" : ""}`} onClick={() => setTab('/test')}>test page</Link>
                <Link to='/newFriend' className={`nav-item ${tab === '/newFriend' ? "nav-selected" : ""}`} onClick={() => setTab('/newFriend')}>New Friend</Link>
            </div>

            <div>
                {user ?
                    <>
                        <Link to='/profile' className={`nav-item ${tab === '/Profile' ? "nav-selected" : ""}`} onClick={() => setTab('/profile')}>user.Email</Link>
                        <Link to='/' className={`nav-item ${tab === '/' ? "nav-selected" : ""}`} onClick={() => setTab('/')}>Log Out</Link>
                    </>
                    :
                    <>
                        <Link to='/login' className={`nav-item ${tab === '/login' ? "nav-selected" : ""}`} onClick={() => setTab('/login')}>Log In</Link>
                        <Link to='/signUp' className={`nav-item ${tab === '/signUp' ? "nav-selected" : ""}`} onClick={() => { setTab('/signUp') }}>Sign Up</Link>
                    </>
                }
            </div>
        </nav >
    )
}

export default Nav;