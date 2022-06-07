import { FirebaseBackend } from "../Context/FirebaseBackend";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const { DBFriends, collections_Friends_deleteDoc } =
    useContext(FirebaseBackend);

  const [Friends, setFriends] = useState();

  useEffect(() => {
    setFriends(DBFriends);
  }, [DBFriends]);

  function deleteButton(event) {
    let document_id = event.target.dataset.id;
    collections_Friends_deleteDoc(document_id);
  }

  return (
    <div id="Home" className="content">
      <h1>Welcome to Friends</h1>
      <main>
        <h2>List of friends</h2>
        <div className="friends-container">
          {Friends && Friends.length !== 0 && (
            <>
              {Friends.map((element) => {
                return (
                  <div key={element.id} title={element.fullName}>
                    <div>
                      <h4>{element.fullName}</h4>
                      <p>{element.specific}</p>
                    </div>
                    <button data-id={element.id} onClick={deleteButton}>
                      <svg
                        data-id={element.id}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                );
              })}
            </>
          )}

          <Link to="/newFriend">
            <div>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Add New Friend
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
