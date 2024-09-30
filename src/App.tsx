
import './App.css'
import { UserCard } from './components/UserCard'
// import axios from 'axios'
// import { User } from './types/api/user'
// import { UserProfile } from './types/userProfile'
// import { useState } from 'react'
import { useAllUsers } from './hooks/useAllUsers'

export default function App() {
        const { getUsers, userProfiles, loading, error } = useAllUsers();
        const onClickFetchUser = () => getUsers();

        return (
                <div className="App">
                        <button onClick={onClickFetchUser}>データ取得</button>
                        <br />
                        {error ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました。</p>
                        ) : loading ? (
                                <>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                        <p>ローディング中...</p>
                                </>
                        ) : (
                                <>
                                        {userProfiles.map((user) => (
                                                <UserCard key={user.id} user={user} />
                                        ))}
                                </>
                        )}
                </div>
        );
};


// const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);


// setLoading(true);
// setError(false);

// axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
//         const data = res.data.map((user) => ({
//                 id: user.id,
//                 name: `${user.name}(${user.username})`,
//                 email: user.email,
//                 address: `${user.address.city}${user.address.suite}${user.address.street}`
//         }));
//         setUserProfiles(data);
// })
// .catch(() => {
//         setError(true);
// })
// .finally(() => {
//         setLoading(false);
// });

// const user = {
//         id:1,
//         name:"じゃけぇ",
//         email:"121@aaa.com",
//         address: "Address",
// }


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
