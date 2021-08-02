import { MyContext } from "../context/GitHubUserContext";
import { useContext } from "react";
const UserListItem = (props: { id: number, login: string }) => {
    const myContext = useContext(MyContext);

    function viewRepositories() {
        console.log("clicked");
        myContext.setLogin(props.login);
        console.log("login: ", myContext.login);
    }

    return (
        <button className='link-btn' onClick={viewRepositories}>{props.login}</button>
    )
}

export default UserListItem;