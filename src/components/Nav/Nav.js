import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseBackend } from '../Context/FirebaseBackend';


function Nav() {
    const [tab, setTab] = useState('/');

    const {user, auth_signOut} = useContext(FirebaseBackend)

    useEffect(() => {

        setTab(window.location.pathname)

    }, [tab, user])

    let ClickModule = (event) => {
        setTab(event.target.attributes.href.value);
    }

    return (
        <nav>
            <div>
                <Link to='/' className={`${tab === '/' ? "nav-selected" : ""}`} onClick={ClickModule}>Home</Link>
                <Link to='/test' className={`${tab === '/test' ? "nav-selected" : ""}`} onClick={ClickModule}>test page</Link>
                <Link to='/newFriend' className={`${tab === '/newFriend' ? "nav-selected" : ""}`} onClick={ClickModule}>New Friend</Link>
            </div>

            <div>
                {user ?
                    <>
                        <Link to='/profile' className={`${tab === '/Profile' ? "nav-selected" : ""}`} onClick={ClickModule}>{user.email}</Link>
                        <Link to='/logOut' onClick={auth_signOut}>Log Out</Link>
                    </>
                    :
                    <>
                        <Link to='/login' className={`${tab === '/login' ? "nav-selected" : ""}`} onClick={ClickModule}>Log In</Link>
                        <Link to='/signUp' className={`${tab === '/signUp' ? "nav-selected" : ""}`} onClick={ClickModule}>Sign Up</Link>
                    </>
                }
            </div>
        </nav >
    )
}

export default Nav;