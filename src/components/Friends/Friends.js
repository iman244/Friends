import { FirebaseBackend } from "../Context/FirebaseBackend";
import { useContext, useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Context/FirebaseBackend";

import { Link } from "react-router-dom";
import Friend from "../../storage/Friend";

function Friends() {
  const [user] = useAuthState(auth);

  return (
    <div id="Friends" className="content">
      <main>
        <h2>List of friends</h2>
        <div className="friends-container">
          {user && <Friend user={user} />}
        </div>
      </main>
    </div>
  );
}

export default Friends;
