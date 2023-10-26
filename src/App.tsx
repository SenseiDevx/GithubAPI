import { useState } from 'react';
import {GithubError, GithubUser, LocalGithubUser} from "./types";
import {isGithubUser} from "./utils/typeguards.ts";
import {extractLocalUser} from "./utils/exract-local-user.ts";
import {Container} from "./components/Container/Container.tsx";
import {TheHeader} from "./components/TheHeader/TheHeader.tsx";
import {Search} from "./components/Search/Search.tsx";
import {UserCard} from "./components/UserCard/UserCard.tsx";



const BASE_URL = 'https://api.github.com/users/';


function App() {
    const [user, setUser] = useState<LocalGithubUser | null>();

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;

        const res = await fetch(url);
        const user = await res.json() as GithubUser | GithubError;

        if (isGithubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null);
        }
    }

    return (
        <Container>
            <TheHeader />
            <Search hasError={!user} onSubmit={fetchUser}/>
            {user && (
                <UserCard
                    {...user}
                />
            )}
        </Container>
  )
}

export default App
