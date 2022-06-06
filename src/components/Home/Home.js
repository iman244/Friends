import { FirebaseBackend } from '../Context/FirebaseBackend'
import { useContext, useEffect, useState } from 'react';


function Home() {
    const { DBFriends, collections_Friends_deleteDoc } = useContext(FirebaseBackend);

    const [Friends, setFriends] = useState();

    useEffect(() => { setFriends(DBFriends) }, [DBFriends])

    function deleteButton(event) {
        let document_id = event.target.dataset.id;
        collections_Friends_deleteDoc(document_id);
    }

    return (
        <div id="Home" className='content'>
            <h1>Welcome to Friends</h1>
            <section>
                <h2>List of friends</h2>
                {Friends ?
                    <div className='friends-container'>
                        {Friends.map((element) => {
                            return (
                                <div key={element.id} title={element.fullName}>
                                    <div>
                                        <h4>{element.fullName}</h4>
                                        <p>{element.specific}</p>
                                    </div>
                                    <button data-id={element.id} onClick={deleteButton}><svg data-id={element.id} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <p>We have no Friend!!</p>
                }
            </section>

        </div>
    )
}

export default Home;