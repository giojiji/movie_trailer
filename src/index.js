
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
let inp = document.getElementById("inp")

let gio = movies.map(movie => {
    return `<div class="movie" >
    <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
    <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
    <p>${movie.genre_ids}</p>
    <p>Year: ${movie.release_date}</p>
    <p>IMDB: ${movie.vote_average}</p>
    <p>IMDB: ${movie.overview}</p>
    </div>`
})


document.getElementById("movies").innerHTML = gio.join("")


function searchmovie() {
    let findmovie = movies.map(movie => {
        if (movie.original_title.toUpperCase() == inp.value.toUpperCase()) {
            return `<div class="movie" >
        <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
        <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
        <p>${movie.genre_ids}</p>
        <p>Year: ${movie.release_date}</p>
        <p>IMDB: ${movie.vote_average}</p>
        <p>IMDB: ${movie.overview}</p>
        </div>`
        }
    })

    document.getElementById("movies").innerHTML = findmovie.join("")

    
}

function action() {
    let findgenre = movies.map(movie => {
        if (movie.genre_ids == "Action") {
            return `<div class="movie" >
            <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
            <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
            <p>${movie.genre_ids}</p>
            <p>Year: ${movie.release_date}</p>
            <p>IMDB: ${movie.vote_average}</p>
            <p>IMDB: ${movie.overview}</p>
            </div>`
        }
    })

    document.getElementById("movies").innerHTML = findgenre.join("")
}

function Comedy() {
    let findgenre = movies.map(movie => {
        if (movie.genre_ids == "Comedy") {
            return `<div class="movie" >
                <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
                <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
                <p>${movie.genre_ids}</p>
                <p>Year: ${movie.release_date}</p>
                <p>IMDB: ${movie.vote_average}</p>
                <p>IMDB: ${movie.overview}</p>
                </div>`
        }
    })

    document.getElementById("movies").innerHTML = findgenre.join("")
}



function Drama() {
    let findgenre = movies.map(movie => {
        if (movie.genre_ids == "Drama") {
            return `<div class="movie" >
                    <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
                    <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
                    <p>${movie.genre_ids}</p>
                    <p>Year: ${movie.release_date}</p>
                    <p>IMDB: ${movie.vote_average}</p>
                    <p>IMDB: ${movie.overview}</p>
                    </div>`
        }
    })

    document.getElementById("movies").innerHTML = findgenre.join("")
}





function Fantasy() {
    let findgenre = movies.map(movie => {
        if (movie.genre_ids == "Fantasy") {
            return `<div class="movie" >
                        <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
                        <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
                        <p>${movie.genre_ids}</p>
                        <p>Year: ${movie.release_date}</p>
                        <p>IMDB: ${movie.vote_average}</p>
                        <p>IMDB: ${movie.overview}</p>
                        </div>`
        }
    })

    document.getElementById("movies").innerHTML = findgenre.join("")
}





function Horror() {
    let findgenre = movies.map(movie => {
        if (movie.genre_ids == "Horror") {
            return `<div class="movie" >
                            <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
                            <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
                            <p>${movie.genre_ids}</p>
                            <p>Year: ${movie.release_date}</p>
                            <p>IMDB: ${movie.vote_average}</p>
                            <p>IMDB: ${movie.overview}</p>
                            </div>`
        }
    })

    document.getElementById("movies").innerHTML = findgenre.join("")
}





function Thriller() {
    let findgenre = movies.map(movie => {
        if (movie.genre_ids == "Thriller") {
            return `<div class="movie" >
                                <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
                                <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
                                <p>${movie.genre_ids}</p>
                                <p>Year: ${movie.release_date}</p>
                                <p>IMDB: ${movie.vote_average}</p>
                                <p>IMDB: ${movie.overview}</p>
                                </div>`
        }
    })

    document.getElementById("movies").innerHTML = findgenre.join("")
}


function allmoviesshow() {
    document.getElementById("movies").innerHTML = gio.join("")
}

let testignidd = 0

function inpsearch() {
    let inp = document.getElementById("inp")
    let testignidd = 0
    let findgenre = movies.map(movie => {
        if (movie.original_title.toUpperCase().includes(inp.value.toUpperCase())) {
            testignidd = 1
            return `<div class="movie" >
                                <img class="movie-img" src= ${IMG_PATH + movie.backdrop_path}>
                                <h2 onclick="choosemovie(event)">${movie.original_title}</h2>
                                <p>${movie.genre_ids}</p>
                                <p>Year: ${movie.release_date}</p>
                                <p>IMDB: ${movie.vote_average}</p>
                                <p>IMDB: ${movie.overview}</p>
                                </div>`
        }

    })


    document.getElementById("movies").innerHTML = findgenre.join("")
    if(testignidd == 0) {
        document.getElementById("movies").innerHTML = `<h1>no result<h1>`
    }
}


setInterval(displayHello, 5000);

let picnum = 0
function displayHello() {
    if (picnum < movies.length) {
        picnum++
        return document.getElementById("iframing").innerHTML = ` <img class="movie-img" src= ${IMG_PATH + movies[picnum].backdrop_path}>`
    }
    else {
        picnum = 0
    }
}

setTimeout(displayHelloo, 0);

function displayHelloo() {
    return document.getElementById("iframing").innerHTML = ` <img class="movie-img" src= ${IMG_PATH + movies[0].backdrop_path}>`
}

function noresult() {
    return document.getElementById("movies").innerHTM = '<h1>No result</h1>'
}


function choosemovie(event) {
    x = event.target
    
    console.log(x.parentElement)
    if(x.textContent.toUpperCase() == movies[0].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[0].youtube_trailer}></iframe>`
    }
    if(x.textContent.toUpperCase() == movies[1].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[1].youtube_trailer}></iframe>`
    }
    if(x.textContent.toUpperCase() == movies[2].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[2].youtube_trailer}></iframe>`
    }
    if(x.textContent.toUpperCase() == movies[3].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[3].youtube_trailer}></iframe>`
    }
    if(x.textContent.toUpperCase() == movies[4].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[4].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[5].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[5].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[6].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[6].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[7].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[7].youtube_trailer}></iframe>`
    }
    if(x.textContent.toUpperCase() == movies[8].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[8].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[9].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[9].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[10].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[10].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[11].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[11].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[12].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[12].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[13].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[13].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[14].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[14].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[15].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[15].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[16].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[16].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[17].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[17].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[18].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[18].youtube_trailer}></iframe>`
        }
    if(x.textContent.toUpperCase() == movies[19].original_title.toUpperCase()) {
        x.parentElement.innerHTML = `<iframe title="song" src=${movies[19].youtube_trailer}></iframe>`
        }
}