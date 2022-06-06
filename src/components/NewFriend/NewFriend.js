import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseBackend } from "../Context/FirebaseBackend";

function NewFriend() {
  const navigate = useHistory();
  const { collections_Friends_addDoc } = useContext(FirebaseBackend);

  async function handleSubmit(event) {
    event.preventDefault();

    let document = {
      fullName: event.target.fullName.value,
      specific: event.target.specific.value,
    };
    collections_Friends_addDoc(document);

    event.target.reset();
    navigate.push("/");
  }

  return (
    <div id="NewFriend" className="content">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlfor="fullName">Full Name</label>
          <input type="text" name="fullName" required />
        </div>

        <div>
          <label htmlfor="specific">Specific</label>
          <input type="text" name="specific" required />
        </div>

        <div>
          <button>New Friend</button>
        </div>
      </form>
    </div>
  );
}

export default NewFriend;
