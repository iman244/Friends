import { Link } from "react-router-dom";
import { db } from "../../../Context/FirebaseBackend";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from "react";
import SearchContact from "../Materials/SearchContact";

function Friend({ user }) {
  const [queryFullName, setQueryFullName] = useState("test");

  let collectionFriends = collection(db, "Users", user.uid, "Friends");
  let queryCollectionFriends = query(
    collection(db, "Users", user.uid, "Friends"),
    where("fullName", "==", queryFullName)
  );

  const [Friends] = useCollection(collectionFriends);
  const [qFriends] = useCollection(queryCollectionFriends);

  let showingFriends;
  if (qFriends) {
    showingFriends = qFriends;
  } else {
    showingFriends = Friends;
  }

  let NavSm = (event) => {
    document.getElementById(event.target.dataset.id).style.display = "block";
  };

  function closeDropdowns(id) {
    var menus = document.getElementsByClassName("menu-friend");
    var i;
    for (i = 0; i < menus.length; i++) {
      var openDropdown = menus[i];
      console.log("is there no id?", !id);
      console.log("does it match?", id, !(openDropdown.id === id));
      if (
        openDropdown.style.display === "block" &&
        (!id || !(openDropdown.id === id))
      ) {
        openDropdown.style.display = "none";
      }
    }
  }

  window.onclick = function (event) {
    if (
      !event.target.matches(".menu-friend") &&
      !event.target.matches(".menu")
    ) {
      closeDropdowns();
    } else if (event.target.matches(".menu")) {
      closeDropdowns(event.target.dataset.id);
    }
  };

  function deleteButton(event) {
    console.log("delete Button clicked");
  }

  return (
    <>
      <SearchContact setQueryFullName={setQueryFullName} />
      {showingFriends
        ? showingFriends.docs.map((element) => {
            return (
              <div key={element.id} title={element.data().fullName}>
                <div>
                  <h4>{element.data().fullName}</h4>
                  <p>{element.data().specific}</p>
                </div>
                <button className="menu" data-id={element.id} onClick={NavSm}>
                  <svg
                    data-id={element.id}
                    className="menu w-6 h-6"
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
                <div className={`menu-friend`} id={element.id}>
                  <ul>
                    <li>
                      <Link to="/chat" onClick={() => {}}>
                        Chat
                      </Link>
                    </li>
                    <li>
                      <Link to="/deleteFriend" onClick={deleteButton}>
                        Delete Friend
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        : null}
      <Link to="/newFriend">
        <div>
          <svg
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          Add New Friend
        </div>
      </Link>
    </>
  );
}

export default Friend;
