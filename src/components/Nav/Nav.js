import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseBackend } from "../Context/FirebaseBackend";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Context/FirebaseBackend";

function Nav() {
  const [tab, setTab] = useState("/");
  const [navsm, setNavsm] = useState("hidden");

  const { auth_signOut } = useContext(FirebaseBackend);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    setTab(window.location.pathname);
  }, [window.location.pathname]);

  let ClickModule = (event) => {
    setTab(event.target.attributes.href.value);
    setNavsm("hidden");
  };

  let NavSm = (event) => {
    setNavsm(event.target.dataset.navsm);
  };

  return (
    <>
      <nav>
        <div>
          <Link
            to="/"
            className={`${tab === "/" ? "nav-selected" : ""}`}
            onClick={ClickModule}
          >
            Home
          </Link>
          <Link
            to="/test"
            className={`${tab === "/test" ? "nav-selected" : ""}`}
            onClick={ClickModule}
          >
            Test Page
          </Link>
          <Link
            to="/Friends"
            className={`${tab === "/Friends" ? "nav-selected" : ""}`}
            onClick={ClickModule}
          >
            Friends
          </Link>
        </div>

        <div>
          {user ? (
            <>
              <Link
                to="/profile"
                className={`${tab === "/profile" ? "nav-selected" : ""}`}
                onClick={ClickModule}
              >
                {user.email}
              </Link>
              <Link to="/logOut" onClick={auth_signOut}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`${tab === "/login" ? "nav-selected" : ""}`}
                onClick={ClickModule}
              >
                Log In
              </Link>
              <Link
                to="/signUp"
                className={`${tab === "/signUp" ? "nav-selected" : ""}`}
                onClick={ClickModule}
              >
                Sign Up
              </Link>
            </>
          )}
          <button data-navsm="block" onClick={NavSm}>
            <svg
              data-navsm="block"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <div className={`nav-sm ${navsm}`}>
        <button data-navsm="hidden" onClick={NavSm}>
          <svg
            data-navsm="hidden"
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <ul className="space-y-6">
          <li>
            <Link to="/test" onClick={ClickModule}>
              Test Page
            </Link>
          </li>
          <li>
            <Link to="/newFriend" onClick={ClickModule}>
              New Friend
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile" onClick={ClickModule}>
                  {user.email}
                </Link>
              </li>
              <li>
                <Link to="/logout" onClick={auth_signOut}>
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={ClickModule}>
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signUp" onClick={ClickModule}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default Nav;
