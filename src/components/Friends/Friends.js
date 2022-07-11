import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Context/FirebaseBackend";
import Friend from "./components_Friends/Friend";

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
