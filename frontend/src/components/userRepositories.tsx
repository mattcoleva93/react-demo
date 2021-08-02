import { useContext } from "react";
import github from "../graphql/githubOptions";
import githubQuery from "../graphql/query";
import { useFetch } from "../hooks/useFetch";
import { MyContext } from "../context/GitHubUserContext";

export interface RepositoryList {
    data: {
        user: {
            repositories: {
                nodes: Repository[]
            }
        }
    }
}

export interface Repository {
    id: string;
    name: string;
    url: string;
}

const UserRepositories = (props: { login?: string | null }) => {
    const myContext = useContext(MyContext);
    const login = props.login;
    var loginFilter = login?.toString() ?? '';
    const { data, loading, error } = useFetch<RepositoryList>({
        uri: github.baseURL, options: {
            method: "POST",
            headers: github.headers,
            body: JSON.stringify(githubQuery(loginFilter))
        }
    });

    function backToList() {
        myContext.setLogin(null);
    };

    let content: any;

    if (loading) {
        content = (
            <div>
                <h2>Repositories are loading...</h2>
            </div>
        );
    }
    else if (error) {
        content = (
            <div>
                <h2>There was an error loading repositories</h2>
            </div>
        );
    }
    else if (!data || !data.data.user || !data.data.user.repositories.nodes) {
        content = (
            <div>
                <h2>{login} has 0 repositories</h2>
            </div>
        );
    }
    else {
        content = (
            <div>
                <ul>
                    {data.data.user.repositories.nodes.map((repo) => (
                        <li key={repo.id}><a href={repo.url}>{repo.name}</a></li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <h2>{login}'s Repositories</h2>
            {content}
            <button className='link-btn' onClick={backToList}>Go back</button>
        </div>
    )
}

export default UserRepositories;