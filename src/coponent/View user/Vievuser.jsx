
import { useParams } from 'react-router-dom'

function ViewUser() {


    let { userID } = useParams();
    console.log(userID);


    return (
        <div>ViewUser : {userID}</div>
    )
}

export default ViewUser