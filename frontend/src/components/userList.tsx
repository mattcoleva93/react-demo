import { useFetch, UserFetchResponse } from "../hooks/useFetch";
import UserListItem from "./userListItem";

interface User {
    id: number;
    login: string;
}

const UserList = () => {

    const { data, loading, error }: UserFetchResponse<User[]> = useFetch({ uri: "http://localhost:3100/githubUsers" });

    if (loading) {
        return (
            <div>
                <h2>The user list is loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h2>There was an error loading the list</h2>
            </div>
        );
    }

    if (!data) {
        return (
            <div>
                <h2>There are no users available</h2>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <UserListItem id={user.id} login={user.login}></UserListItem>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default UserList;