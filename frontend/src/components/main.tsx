import { useContext } from "react"
import { MyContext } from "../context/GitHubUserContext"
import UserRepositories from '../components/userRepositories';
import UserList from '../components/userList';
const Main = () => {
    const myContext = useContext(MyContext);

    return (
        <div>
            {!myContext.login || myContext.login === "" ? (<UserList />) : (<UserRepositories login={myContext.login}></UserRepositories>)}
        </div>
    )
}

export default Main;