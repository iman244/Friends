import { useState } from "react";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  function handleProfile(event) {
    event.preventDefault();
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
          <label htmlFor="Email">Email</label>
          <div className="error">example error</div>
          <input
            name="Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
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
          <label htmlFor="Phonenumber">Phone Number</label>
          <div className="error">example error</div>
          <input
            name="Phonenumber"
            type="tel"
            onChange={(event) => {
              setPhonenumber(event.target.value);
            }}
            value={phonenumber}
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
