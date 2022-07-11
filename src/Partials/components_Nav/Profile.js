import { useEffect, useState } from "react";
import { db } from "../../Context/FirebaseBackend";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

function Profile({ user }) {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [profile, loading, error] = useCollection(
    collection(db, "Users", user.uid, "Profile")
  );

  useEffect(() => {
    LoadProfile();
  }, [profile]);

  function LoadProfile() {
    if (loading) {
      console.log(user.uid);
      console.log("loading ...");
    } else if (error) {
      console.log(error.message);
    } else if (profile) {
      profile.forEach((document) => {
        switch (Object.keys(document.data())[0]) {
          case "username":
            setUsername(document.data()["username"]);
            break;
          case "bio":
            setBio(document.data()["bio"]);
            break;
          case "birthDate":
            setBirthDate(document.data()["birthDate"]);
            break;
          case "phoneNumber":
            setPhonenumber(document.data()["phoneNumber"]);
            break;
        }
      });
    }
  }

  async function handleProfile(event) {
    event.preventDefault();

    await setDoc(doc(db, "Users", user.uid, "Profile", "username"), {
      username,
    });
    await setDoc(doc(db, "Users", user.uid, "Profile", "bio"), { bio });
    await setDoc(doc(db, "Users", user.uid, "Profile", "birthDate"), {
      birthDate,
    });
    await setDoc(doc(db, "Users", user.uid, "Profile", "phoneNumber"), {
      phoneNumber,
    });
  }

  return (
    <div id="Profile" className="content">
      <h1>Profile Page</h1>
      <form onSubmit={handleProfile}>
        <div>
          <label htmlFor="Username">Username</label>
          <div className="error">example error</div>
          <input
            name="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
        </div>

        <div>
          <label htmlFor="Bio">Bio</label>
          <input
            name="Bio"
            type="text"
            onChange={(event) => {
              setBio(event.target.value);
            }}
            value={bio}
          />
        </div>

        <div>
          <label htmlFor="BirthDate">Birth Date</label>
          <input
            name="BirthDate"
            type="date"
            onChange={(event) => {
              setBirthDate(event.target.value);
            }}
            value={birthDate}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="error">example error</div>
          <input
            name="phoneNumber"
            type="tel"
            onChange={(event) => {
              setPhonenumber(event.target.value);
            }}
            value={phoneNumber}
          />
        </div>

        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
