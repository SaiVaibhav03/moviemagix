import { Routes, Route } from "react-router-dom";
import FirstPage from "../First/FirstPage.jsx";
// import HomePage from "../HomePage/HomePage.jsx";


function PageRoutes(){
    return(
        <Routes>
            <Route path="/" element={<FirstPage />}/>
            {/* <Route path="/home" element = { <HomePage /> } /> */}
            <Route path="/movies" element={<h1>Movies Page</h1>}/>
            <Route path="/tv series" element={<h1>TV Series Page</h1>}/>
            <Route path="/popular" element={<h1>Popular Page</h1>}/>
            <Route path="/now playing" element={<h1>Now Playing Page</h1>}/>
            <Route path="/search" element={<h1>Search Page</h1>} />
            <Route path="*" element={<h1>NotFound Page</h1>}/>
        </Routes>
    )
}

export default PageRoutes;



