import { DBContext } from '../Context/DBContext'
import { useContext, useEffect, useState } from 'react';


function Home() {
    const { DBFriends, collections_Friends_deleteDoc } = useContext(DBContext);

    const [Friends, setFriends] = useState();

    useEffect(() => { setFriends(DBFriends) }, [DBFriends])

    function deleteButton(event) {
        console.log("delete button clicked!");
        let document_id = event.target.dataset.id;
        collections_Friends_deleteDoc(document_id);
    }

    return (
        <div className="content">
            <h1>Welcome to Friends</h1>
            <section>
                <h2>List of friends</h2>
                {Friends ?
                    <ul className="list">
                        {Friends.map((element) => {
                            return (
                                <li className="list-item" key={element.id}>
                                    <div className="list-item-content">
                                        <h4>{element.fullName}</h4>
                                        <p>{element.specific}</p>
                                    </div>
                                    <button className="list-item-deleteButton" data-id={element.id} onClick={deleteButton}>&#x2716;</button>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    <p>We have no Friend!!</p>
                }
            </section>

        </div>
    )
}

export default Home;