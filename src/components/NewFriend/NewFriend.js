import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DBContext } from '../Context/DBContext'

function NewFriend() {
    let navigate = useHistory()
    const { collections_Friends_addDoc } = useContext(DBContext);

    async function handleSubmit(event) {
        event.preventDefault();

        let document = { fullName: event.target.fullName.value, specific: event.target.specific.value };
        collections_Friends_addDoc(document);

        event.target.reset()
        navigate.push('/');
    }

    return (
        <div className="content">
            <form className="FriendPost-form" onSubmit={handleSubmit}>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="fullName">Full Name</label>
                        <input type="text" name="fullName" required />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="specific">Specific</label>
                        <input type="text" name="specific" required />
                    </div>
                </div>

                {/* <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="UserName">User Name</label>
                        <input type="text" name="UserName" required />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="BirthDate">Birth Date</label>
                        <input type="date" name="BirthDate" />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="InstagramId">Instagram Id</label>
                        <input type="text" name="InstagramId" />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="TelegramId">Telegram Id</label>
                        <input type="text" name="TelegramId" />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="TwitterId">Twitter Id</label>
                        <input type="text" name="TwitterId" />
                    </div>
                </div> */}

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <button className="form-InputsDiv-submitButton">New Friend</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewFriend;