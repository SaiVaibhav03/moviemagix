const baseURL = "https://api.themoviedb.org/3"        
const options = {
    method: "GET",
    headers: {
    accept: "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjJkYjFhMTIxNzY3Mjg0YTk2YjNkYTQ1YmRjMGZmMyIsInN1YiI6IjY1YmQ4NjA1NDM5OTliMDBjOWMzZTViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.63TrwKyKRvo18nIBmz5hcTyuPcP327wihflzhq-icx0",
    },
}

const apiUrl = [
    // Discover 
        "https://api.themoviedb.org/3/discover/movie",  // language, page, region, year,  sortBy: popularity ↑↓, title ↑↓, primary_release_date ↑↓

    // Details
        "https://api.themoviedb.org/3/movie/{movie_id}",

    //

]   