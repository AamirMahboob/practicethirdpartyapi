// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//     const CLIENT_ID = "4a88b0d91e7c44d1b8615927b87037ca";
//     const REDIRECT_URI = "http://localhost:3000";
//     const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
//     const RESPONSE_TYPE = "token";

//     const [token, setToken] = useState("");
//     const [searchKey, setSearchKey] = useState("");
//     // const [artists, setArtists] = useState([]);
//     const [tracks, setTracks] = useState([]);
//     const searchTracks = async (e) => {
//       e.preventDefault();
//       try {
//           const { data } = await axios.get("https://api.spotify.com/v1/search", {

//           headers: {
//                   Authorization: `Bearer ${token}`
//               },
//               params: {
//                   q: searchKey,
//                   type: "track"
//               }
//           });
//            console.log(data)
//           setTracks(data.tracks.items);
//       } catch (error) {
//           console.error("Error fetching tracks:", error);
//       }
//   };
//     // const searchArtists = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const { data } = await axios.get("https://api.spotify.com/v1/search", {
//     //             headers: {
//     //                 Authorization: `Bearer ${token}`
//     //             },
//     //             params: {
//     //                 q: searchKey,
//     //                 type: "artist"
//     //             }
//     //         });
//     //         console.log(data)
//     //         setArtists(data.artists.items);
//     //     } catch (error) {
//     //         console.error("Error fetching artists:", error);
//     //     }
//     // };

//     useEffect(() => {
//         const hash = window.location.hash;
//         let token = window.localStorage.getItem("token");

//         if (!token && hash) {
//             token = hash
//                 .substring(1)
//                 .split("&")
//                 .find((elem) => elem.startsWith("access_token"))
//                 .split("=")[1];

//             window.location.hash = "";
//             window.localStorage.setItem("token", token);
//         }

//         setToken(token);
//     }, []);

//     const logout = () => {
//         setToken("");
//         window.localStorage.removeItem("token");
//     };

//     // const renderArtists = () => {
//     //     return artists.map((artist) => (
//     //         <div key={artist.id}>
//     //             {artist.images.length ? (
//     //                 <img width={"100%"} src={artist.images[0].url} alt="" />
//     //             ) : (
//     //                 <div>No Image</div>
//     //             )}
//     //             {artist.name}

//     //         </div>
//     //     ));
//     // };
//     const renderTracks = () => {
//       return tracks.map((track) => (
//           <div key={track.id}>
//               <img src={track.album.images[0].url} alt="" />
//               <p>{track.name}</p>
//               <audio controls>
//                   <source src={track.preview_url} type="audio/mpeg" />
//               </audio>
//           </div>
//       ));
//   };

//     return (
//         // <div className="App">
//         //     <header className="App-header">
//         //         <h1>Spotify React</h1>
//         //         <form onSubmit={searchArtists}>
//         //             <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
//         //             <button type={"submit"}>Search</button>
//         //         </form>
//         //         {!token ? (
//         //             <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
//         //                 Login to Spotify
//         //             </a>
//         //         ) : (
//         //             <button onClick={logout}>Logout</button>
//         //         )}
//         //     </header>
//         //     {renderArtists()}
//         // </div>
//         <div className="App">
//             <header className="App-header">
//                 <h1>Spotify React</h1>
//                 <form onSubmit={searchTracks}>
//                     <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
//                     <button type={"submit"}>Search Tracks</button>
//                 </form>
//                 {!token ? (
//                     <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
//                         Login to Spotify
//                     </a>
//                 ) : (
//                     <button onClick={logout}>Logout</button>
//                 )}
//             </header>
//             {renderTracks()}
//         </div>
//     );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//     const APP_ID = "643501"; // Replace with your Deezer App ID
//     const AUTH_ENDPOINT = "https://connect.deezer.com/oauth/auth.php";
//     const REDIRECT_URI = "http://localhost:3001";
//     const RESPONSE_TYPE = "token";
//     const DEEZER_API_URL = "https://api.deezer.com/search";

//     const [token, setToken] = useState("");
//     const [searchKey, setSearchKey] = useState("");
//     const [tracks, setTracks] = useState([]);

//     const searchTracks = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.get('/search', {
//                 params: {
//                     q: searchKey,
//                 },
//             });
//             console.log(data);
//             setTracks(data.data);
//         } catch (error) {
//             console.error("Error fetching tracks:", error);
//         }
//     };

//     useEffect(() => {
//         const hash = window.location.hash;
//         let token = window.localStorage.getItem("token");

//         if (!token && hash) {
//             token = hash
//                 .substring(1)
//                 .split("&")
//                 .find((elem) => elem.startsWith("access_token"))
//                 .split("=")[1];

//             window.location.hash = "";
//             window.localStorage.setItem("token", token);
//         }

//         setToken(token);
//     }, []);

//     const logout = () => {
//         setToken("");
//         window.localStorage.removeItem("token");
//     };

//     const renderTracks = () => {
//         return tracks.map((track) => (
//             <div key={track.id}>
//                 <img src={track.album.cover} alt="" />
//                 <p>{track.title}</p>
//                 <audio controls>
//                     <source src={track.preview} type="audio/mp3" />
//                 </audio>
//             </div>
//         ));
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Deezer React</h1>
//                 <form onSubmit={searchTracks}>
//                     <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
//                     <button type="submit">Search Tracks</button>
//                 </form>
//                 {!token ? (
//                     <a href={`${AUTH_ENDPOINT}?app_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
//                         Login to Deezer
//                     </a>
//                 ) : (
//                     <button onClick={logout}>Logout</button>
//                 )}
//             </header>
//             {renderTracks()}
//         </div>
//     );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//     const CLIENT_ID = 'f7152a00cc154c43945c06ffcc005534';
//     const REDIRECT_URI = 'http://localhost:3000';
//     const YANDEX_API_URL = 'https://api.music.yandex.net';

//     const [token, setToken] = useState('');
//     const [searchKey, setSearchKey] = useState('');
//     const [tracks, setTracks] = useState([]);

//     const searchTracks = async (e) => {
//         e.preventDefault();
//         console.log(token)
//         try {
//             const response = await axios.get(`https://api.music.yandex.net/artists/search?text=${encodeURIComponent("rahatali")}&type=track`, {
               
//                 header: {
//                     Authorization: `Bearer ${token}`,
//                 }
//             });
//             console.log(response.data.result);
//             setTracks(response.data.result.tracks);
//         } catch (error) {
//             console.error('Error fetching tracks:', error);
//         }
//     };

//     useEffect(() => {
//         const params = new URLSearchParams(window.location.hash.substring(1));
//         const accessToken = params.get('access_token');
//         if (accessToken) {
//             setToken(accessToken);
//             window.localStorage.setItem('token', accessToken);
//         } else {
//             const localToken = window.localStorage.getItem('token');
//             if (localToken) {
//                 setToken(localToken);
//             }
//         }
//     }, []);

//     const logout = () => {
//         setToken('');
//         window.localStorage.removeItem('token');
//     };

//     const renderTracks = () => {
//         return tracks.map((track) => (
//             <div key={track.id}>
//                 <img src={track.cover} alt="" />
//                 <p>{track.title}</p>
//                 <audio controls>
//                     <source src={track.preview} type="audio/mp3" />
//                 </audio>
//             </div>
//         ));
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Yandex Music React</h1>
//                 <form onSubmit={searchTracks}>
//                     <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
//                     <button type="submit">Search Tracks</button>
//                 </form>
//                 {!token ? (
//                     <a href={`https://oauth.yandex.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}>
//                         Login to Yandex
//                     </a>
//                 ) : (
//                     <button onClick={logout}>Logout</button>
//                 )}
//             </header>
//             {renderTracks()}
//         </div>
//     );
// }

// export default App;
import React from 'react'

// import React from 'react'
 
 const App = () => {
   return (
     <div>
        
     </div>
   )
 }
 
 export default App