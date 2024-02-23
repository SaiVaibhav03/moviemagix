const searchbarInput = document.querySelector(".searchbar-input")
const searchButton = document.querySelector(".search-btn")
const movies_container_outline = document.querySelector(".movies-container-outline")
const pages = document.querySelectorAll(".pages")
const closeButton = document.querySelector('.close-btn')
const filtersForm = document.querySelector('.filters-outline').children

let filtersArray = []
let clickedPage = ''
let currentPage = 1
let StartPage = 1
let EndPage = 1

let userInput_paramsData = {}
let requestedQuery = ''
let userInputValue = ''

let previousSearchbarInput = ''

window.addEventListener("load", async (e) => {
  searchButton.addEventListener("click", searchingMovie) 
  page_initialize()
  searchingFilters()
  document.querySelector('#trending').classList.add('clicked')
  document.querySelector('#trending').classList.remove('unclicked')
  userInput_paramsData = {
    requestedQuery: "filterRequested",
    eventListnerClicked: true,
    clickedFilter: document.querySelector('#trending')
  }
  try{
    const movieData = await setHeader_setParam(userInput_paramsData)
    await createMovies(movieData)
  }catch(e){
    console.log(e)
  }
});

function closeButtonClicked(popupDiv) {
  popupDiv.classList.remove('popup-active')
  popupDiv.classList.add('popup-inactive')
  movies_container_outline.classList.add('cursor-active')
  movies_container_outline.classList.remove('cursor-inactive')
  document.querySelector('.filters-outline').classList.add('cursor-active')
  document.querySelector('.filters-outline').classList.remove('cursor-inactive')
  document.querySelector('.nextPage').classList.add('cursor-active')
  document.querySelector('.nextPage').classList.remove('cursor-inactive')

}

function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + " hrs and " + rminutes + " mins";
}

async function createPopUp(clickedMovie) {
  userInput_paramsData = {
    requestedQuery: "movieDetailsRequested",
    clickedMovie: `${clickedMovie.id}`
  }
  const popupDiv = document.querySelector('.popup-inactive')
  popupDiv.classList.add('popup-active')
  popupDiv.classList.remove('popup-inactive')
  try {
    const movieDetailsData = await setHeader_setParam(userInput_paramsData);
    console.log(movieDetailsData) 
    let names = ''
    movieDetailsData.genres.forEach((element)=>{
      names += element.name +' '
    })
    let imagesrc = ''
    if(!movieDetailsData.poster_path){
      imagesrc = 'images/No Image.png'
    }else{
      imagesrc = `http://image.tmdb.org/t/p/w500/${movieDetailsData.poster_path}`
    }
    popupDiv.innerHTML = `
      <button class = "close-btn"><i class = "fa-regular fa-circle-xmark fa-2xl"></i></button>
      <h1 class = "h1-Title noerror-outline">${movieDetailsData.title}</h1> 
      <img src = http://image.tmdb.org/t/p/w500/${movieDetailsData.poster_path} class = "moviePoster" alt = "no image">
      <div class="spanTagClass">
      <!-- <span class = "spanTag SpanTagTitle">    ${movieDetailsData.title.toUpperCase()}</span> -->
      <span class = "spanTag"> Runtime:   ${timeConvert(movieDetailsData.runtime)} </span>
      <span class = "spanTag"> Released Date:   ${(movieDetailsData.release_date)}</span>
      <span class = "spanTag"> Status:   ${(movieDetailsData.status)}</span>
      <span class = "spanTag"> Genres:   ${(names)}</span>
      </div>
    `
  }catch (e) {
    popupDiv.innerHTML = `
    <button class = "close-btn"><i class = "fa-regular fa-circle-xmark fa-2xl"></i></button>
    <h1 class = "h1-Title error-outline">${e.message}</h1> 
    `
  }
  document.querySelector('body').appendChild(popupDiv)
  document.querySelector('.close-btn').addEventListener('click', ()=>{
    closeButtonClicked(popupDiv)
  })
}

async function moviesClicked(moviesData) {
  const allDiv = movies_container_outline.querySelectorAll('div')
  const parsedMovieData = [... moviesData.results] 
  allDiv.forEach((eachDiv,index)=>{
    eachDiv.id = parsedMovieData[index].id
    eachDiv.addEventListener('click', (e)=>{
      movies_container_outline.classList.remove('cursor-active')
      movies_container_outline.classList.add('cursor-inactive')
      document.querySelector('.filters-outline').classList.add('cursor-inactive')
      document.querySelector('.filters-outline').classList.remove('cursor-active')
      document.querySelector('.nextPage').classList.add('cursor-inactive')
      document.querySelector('.nextPage').classList.remove('cursor-active')
      createPopUp(eachDiv)
    })
  })
}

async function createMovies(moviesData) {
  if(moviesData.results.length == 0){
    movies_container_outline.innerText = "no results found"
    movies_container_outline.classList.remove('movies-container-noerror-outline')
    movies_container_outline.classList.add('movies-container-error-outline')
  }
  else{
    let imagesrc = ''
    const hmtltags = await moviesData.results.map((eachelement) => {
      if(!eachelement.backdrop_path){
        imagesrc = 'images/No Image.png'
      }else {
        imagesrc = `http://image.tmdb.org/t/p/w500/${eachelement.backdrop_path}`
      } 
      return `<div class="movies-outline">
            <img class="moviesImage" alt="No Image" src="${imagesrc}">
            <span class="movieSpan">${eachelement.title}</span>
        </div>
      ` })
    movies_container_outline.innerHTML = hmtltags.join("")
    movies_container_outline.classList.remove('movies-container-error-outline')
    movies_container_outline.classList.add('movies-container-noerror-outline')
    moviesClicked(moviesData)
  }
}

async function fetchData(fullURL, options) {
  await new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve()
    },300)
  })
  try {
    const res = await fetch(fullURL, options)
    console.log(res)
    if (!res.ok) {
      switch (res.status) {
        case 400:
          throw new Error('Invalid: Please provide valid data')
        case 401:
          throw new Error('Unauthorized: Please provide valid authenticate')
        case 404:
          throw new Error('Sorry: The requested data is not found')
        default:
          if (res.status >= 500) {
            throw new Error('Server Error: Something went wrong on the server side');
          } else {
            throw new Error('Unknown error');
          }
      }
    }
    const data = await res.json()
    console.log(data)
    return data
  }catch (e) {
      throw e
  }
}

async function setHeader_setParam(userInput_paramsData) {
  try {
    const baseURL = "https://api.themoviedb.org/3"        
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjJkYjFhMTIxNzY3Mjg0YTk2YjNkYTQ1YmRjMGZmMyIsInN1YiI6IjY1YmQ4NjA1NDM5OTliMDBjOWMzZTViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.63TrwKyKRvo18nIBmz5hcTyuPcP327wihflzhq-icx0",
      },
    }
    if(userInput_paramsData.requestedQuery == "searchRequested"){
      const parameters = {
        query: `${userInput_paramsData.searchInput}`,
        page: `${currentPage}`
      }
      const queryString = new URLSearchParams(parameters).toString()
      const fullURL = `${baseURL}/search/movie?${queryString}`
      const moviesData = await fetchData(fullURL, options)
      EndPage = moviesData.total_pages
      addUnclicked_removeClicked()
      filtersArray.splice(filtersArray.length, 0)
      return moviesData
    }
    else if(userInput_paramsData.requestedQuery == "movieDetailsRequested"){
      const parameters = `${userInput_paramsData.clickedMovie}`
      const queryString = new URLSearchParams(parameters).toString()
      const fullURL =  `${baseURL}/movie/${queryString}`
      const movieDetailsData = await fetchData(fullURL, options)
      return movieDetailsData
    }
    else if(userInput_paramsData.requestedQuery == "filterRequested" && userInput_paramsData.eventListnerClicked){
      if(userInput_paramsData.clickedFilter.id == 'now_playing' || userInput_paramsData.clickedFilter.id == 'upcoming' || userInput_paramsData.clickedFilter.id == 'popular' || userInput_paramsData.clickedFilter.id == 'top_rated'){
        addUnclicked_removeClicked()
        filtersArray.splice(0, filtersArray.length)
        filtersArray.push(userInput_paramsData.clickedFilter)
        userInput_paramsData.clickedFilter.classList.add('clicked')
        userInput_paramsData.clickedFilter.classList.remove('unclicked')
        currentPage = 1
        const parameters = {
          page: `${currentPage}`,
        }
        const queryString = new URLSearchParams(parameters).toString()
        const fullURL = `${baseURL}/movie/${userInput_paramsData.clickedFilter.id}?${queryString}`
        console.log(fullURL)
        const moviesData = await fetchData(fullURL, options)
        if(moviesData.total_pages > 200){
          EndPage = 200
        }else{
          EndPage = moviesData.total_pages
        }
        return moviesData
      }
      else if(userInput_paramsData.clickedFilter.id == 'trending'){
        addUnclicked_removeClicked()
        filtersArray.splice(0, filtersArray.length)
        filtersArray.push(userInput_paramsData.clickedFilter)
        userInput_paramsData.clickedFilter.classList.add('clicked')
        userInput_paramsData.clickedFilter.classList.remove('unclicked')
        currentPage = 1
        const parameters = {
          page: `${currentPage}`
        }
        const queryString = new URLSearchParams(parameters).toString()
        const fullURL = `${baseURL}/${userInput_paramsData.clickedFilter.id}/movie/day?${queryString}`
        const moviesData = await fetchData(fullURL, options)
        if(moviesData.total_pages > 200){
          EndPage = 200
        }else{
          EndPage = moviesData.total_pages
        }
        return moviesData
      }
      else{
        if(filtersArray.includes(now_playing) || filtersArray.includes(upcoming) || filtersArray.includes(popular) || filtersArray.includes(top_rated) || filtersArray.includes(trending) ){
          addUnclicked_removeClicked()
          filtersArray.splice(0, filtersArray.length)
        }
        console.log(filtersArray.includes(userInput_paramsData.clickedFilter))
        if(filtersArray.includes(userInput_paramsData.clickedFilter)){
          let index = filtersArray.indexOf(userInput_paramsData.clickedFilter)
          filtersArray[index].classList.add('unclicked')
          filtersArray[index].classList.remove('clicked') 
          filtersArray.splice(index, 1)        
        }
        else {
          userInput_paramsData.clickedFilter.classList.add('clicked')
          userInput_paramsData.clickedFilter.classList.remove('unclicked')
          filtersArray.push(userInput_paramsData.clickedFilter)
        }
        let genreslist = filtersArray.map((eachelement)=>{
          return eachelement.id
        })
        currentPage = 1
        const parameters = {
          page: `${currentPage}`,
          with_genres: genreslist.join()
        }
        const queryString = new URLSearchParams(parameters).toString()
        const fullURL = `${baseURL}/discover/movie?${queryString}`
        const moviesData = await fetchData(fullURL, options)
        if(moviesData.total_pages > 200){
          EndPage = 200
        }else{
          EndPage = moviesData.total_pages
        }
        return moviesData
      }
    }
    else if(userInput_paramsData.requestedQuery == "filterRequested" && !userInput_paramsData.eventListnerClicked){
      if(filtersArray.includes(now_playing) || filtersArray.includes(upcoming) || filtersArray.includes(popular) || filtersArray.includes(top_rated)){
        const parameters = {
          page: `${currentPage}`
        }
        const queryString = new URLSearchParams(parameters).toString()
        // const fullURL = `${baseURL}/movie/${filtersArray[0].id}?${queryString}`
        const fullURL = `${baseURL}/movie/${filtersArray[0].id}?${queryString}`
        console.log(fullURL)
        const moviesData = await fetchData(fullURL, options)
        return moviesData
      }
      else if(filtersArray.includes(trending)){
        const parameters = {
          page: `${currentPage}`
        }
        const queryString = new URLSearchParams(parameters).toString()
        const fullURL = `${baseURL}/${filtersArray[0].id}/movie/day?${queryString}`
        const moviesData = await fetchData(fullURL, options)
        return moviesData
      }    
      else {
        let genreslist = filtersArray.map((eachelement)=>{
          return eachelement.id
        })
        const parameters = {
          page: `${currentPage}`,
          with_genres: genreslist.join()
        }
        const queryString = new URLSearchParams(parameters).toString()
        const fullURL = `${baseURL}/discover/movie?${queryString}`
        const moviesData = await fetchData(fullURL, options)
        return moviesData
      }
    }
  }catch(e) {
    throw e
  }
}

async function searchingMovie() {
  // userInputValue1 = searchbarInput.value
  userInput_paramsData = {
    requestedQuery: "searchRequested",
    searchInput: `${searchbarInput.value}`
  }
  if (userInput_paramsData.searchInput && previousSearchbarInput != userInput_paramsData.searchInput) {
    previousSearchbarInput = userInput_paramsData.searchInput
    try {
      const moviesData = await setHeader_setParam(userInput_paramsData)
      console.log(moviesData)
      await createMovies(moviesData) 
    }catch (e) {
      movies_container_outline.innerText = e.message
      movies_container_outline.classList.remove('movies-container-noerror-outline')
      movies_container_outline.classList.add('movies-container-error-outline')
    }
  } else {
    searchbarInput.placeholder = "Enter Movie Name"
  }
}
/* <------------------------ Page Setup Starts Here  --------------------------->*/

function func_unclicked(){  // changing the page style selected to unselected
  pages.forEach(element => {
    element.classList.add('unclicked')
  })
}

async function pageSetting(clicked){  // setup pages pervious,next,start,end pages
  clickedPage = clicked.outerText
  func_unclicked()
  if (clickedPage === "Next Page" && EndPage > 1) {
    currentPage += 1
    clicked.classList.remove('unclicked')
    clicked.classList.add('clicked')
  } 
  else if (clickedPage === "Previous Page" && currentPage > 1) {
    currentPage -= 1
    clicked.classList.remove('unclicked')
    clicked.classList.add('clicked')
  } 
  else if (clickedPage === "Start Page") {
    currentPage = 1
    clicked.classList.remove('unclicked')
    clicked.classList.add('clicked')
  } 
  else if (clickedPage === "End Page") {
    currentPage = EndPage
    clicked.classList.remove('unclicked')
    clicked.classList.add('clicked')
  }
  try {
    if(!searchbarInput.value){ 
      userInput_paramsData = {
        requestedQuery: "filterRequested",
        eventListnerClicked: false
      }
      await setHeader_setParam(userInput_paramsData)
      const moviesData = await setHeader_setParam(userInput_paramsData)
      createMovies(moviesData)
    }else{
      await searchingMovie()
    }
  }catch (e) {
    movies_container_outline.innerText = e.message
    movies_container_outline.classList.remove('movies-container-noerror-outline')
    movies_container_outline.classList.add('movies-container-error-outline')
  }
  pages[2].innerText = `Page - ${currentPage}`
}

async function page_initialize() {  // takes every page and added eventlistner
  pages.forEach((eachelement) => {   
    pages[2].innerText = `Page - ${currentPage}`
    eachelement.addEventListener("click", (e) => {
      eventListnerClicked = false
      pageSetting(e.target)
    })
  }) 
}
/* <------------------------ Page Setup End Here  --------------------------->*/

/* <------------------------ Filters Starts Here  --------------------------->*/

function addUnclicked_removeClicked(){
  filtersArray.forEach( (element) => {
    element.classList.add('unclicked')
    element.classList.remove('clicked')
  })
}

function searchingFilters(){
  for (const eachButton of filtersForm) {
    eachButton.addEventListener('click', async (event)=>{
      event.preventDefault()
      searchbarInput.value = ''
      userInput_paramsData = {
        requestedQuery: "filterRequested",
        eventListnerClicked: true,
        clickedFilter: eachButton
      }
      try {
        const moviesData =  await setHeader_setParam(userInput_paramsData)
        createMovies(moviesData)
        pages[2].innerText = `Page - ${currentPage}`
        func_unclicked()
      } catch (e) {
        movies_container_outline.innerText = e.message
        movies_container_outline.classList.remove('movies-container-noerror-outline')
        movies_container_outline.classList.add('movies-container-error-outline')
      }
    })
  }  
}

/* <------------------------ Filters Ends Here  ---------------------------> */
