import './CSS/main.css'
import './CSS/selecct.css'
import './style.css'
import './auth.css'

if (window.location.pathname === '/auth.html') {
  const form = document.getElementById('logInForm')
  const inputLogin = document.getElementById('login')
  const inputPassword = document.getElementById('password')

  console.log(form)

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = {
      login: inputLogin.value,
      password: inputPassword.value,
    }

    console.log(user.password)

    localStorage.setItem('user', JSON.stringify(user))
    if (!user.login) {
      alert('Enter login')
      return
    }

    window.location.assign('http://localhost:8080/index.html')
  })

  if (localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user'))
    window.location.assign('http://localhost:8080/index.html')
  }
}

if (window.location.pathname === '/index.html') {
  const $user = document.querySelector('.user-name')
  const $sign = document.querySelector('#modal-btn')

  if (localStorage.getItem('user')) {
    let user = JSON.parse(localStorage.getItem('user'))

    $sign.textContent = 'Log out'

    $user.innerHTML = user.login

    $sign.addEventListener('click', () => {
      localStorage.removeItem('user')
      $sign.textContent = 'Signin'
      $user.innerHTML = ''
    })
  }
}

//поиск
const searchForm = document.querySelector('#search-form')
const movie = document.querySelector('#movies')
console.log(movie)
const urlposter = 'https://image.tmdb.org/t/p/w500'

function apiSearch(event) {
  event.preventDefault()
  const searchText = document.querySelector('.form-control').value

  if (searchText.trim().length === 0) {
    movie.innerHTML =
      '<h2 class = "col-12 text-center text-info">Заполните поле поиска</h2>'
    return
  }

  const server =
    'https://api.themoviedb.org/3/search/multi?api_key=' +
    'fe55bc0871414d8edb95f62510083b42&language=ru&query=' +
    searchText
  movie.innerHTML = ' <div class="spinner"></div>'

  fetch(server)
    .then(function (value) {
      console.log()
      if (value.status !== 200) {
        return Promise.reject(value)
      }
      return value.json()
    })

    .then(function (output) {
      let inner = ''
      if (output.results.length === 0) {
        inner =
          '<h2 class = "col-12 text-center text-info">По вашему запросу ничего не найдено</h2>'
      }

      output.results.forEach(function (item) {
        let nameItem = item.name || item.title
        const poster = item.poster_path
          ? urlposter + item.poster_path
          : './img/poster.png'
        let dataInfo = ''
        if (item.media_type !== 'person')
          dataInfo = `data-id="${item.id}" data-type="${item.media_type}"`
        inner += `
                <div class=" col-12 col-md-4 col-xl-3" item>
                <img src="${poster}" class="img_poster" alt="${nameItem}" ${dataInfo}>
                <h5>${nameItem}</h5>
                </div>
                `
      })
      movie.innerHTML = inner

      addEventMedia()
    })
    .catch(function (reason) {
      movie.innerHTML = 'Упс, что то пошло не так!'
      console.error(reason || reason.status)
    })
}

searchForm.addEventListener('submit', apiSearch)

function addEventMedia() {
  const media = movie.querySelectorAll('img[data-id]')
  media.forEach(function (elem) {
    elem.style.cursor = 'pointer'
    elem.addEventListener('click', showFullInfo)
  })
}

function showFullInfo() {
  let url = ''
  if (this.dataset.type === 'movie') {
    url =
      'https://api.themoviedb.org/3/movie/' +
      this.dataset.id +
      '?api_key=fe55bc0871414d8edb95f62510083b42&language=ru'
  } else if (this.dataset.type === 'tv') {
    url =
      'https://api.themoviedb.org/3/tv/' +
      this.dataset.id +
      '?api_key=fe55bc0871414d8edb95f62510083b42&language=ru'
  } else {
    movie.innerHTML =
      '<h2 class = "col-12 text-center text-info">Произошла ошибка, повторите позже</h2>'
  }

  fetch(url)
    .then(function (value) {
      if (value.status !== 200) {
        return Promise.reject(new Error(value.status))
      }
      return value.json()
    })

    .then((output) => {
      movie.innerHTML = `
        <button type="button" class="buttonback text-info" onclick="javascript:location.reload()"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left buttonbackSVG" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg></button>
        <h4 class = "col-12 text-center text-info titlePost">${
          output.name || output.title
        }</h4>
        <div class = "col-4">
        <img src = '${urlposter + output.poster_path}' alt = '${
        output.name || output.title
      }'>
        ${
          output.homepage
            ? `<p class = 'text-center linkImgPost'> <a href = "${output.homepage}" target = "_blank" >Официальная страница</a> </p>`
            : ''
        }
        ${
          output.imdb_id
            ? `<p class = 'text-center linkImgPost'> <a href = "https://imdb.com/title/${output.imdb_id}" target = "_blank" >Страница на IMDB</a> </p>`
            : ''
        }
        </div>
        <div class = "col-8">
        <div class="InfoPost">
            <p>Рейтинг: ${output.vote_average}</p>
            <p>Статус: ${output.status}</p>
            <p>Премьера: ${output.first_air_date || output.release_date}</p>
            <p>Жанр: ${output.genres.map((genre) => genre.name).join(', ')}</p>
        </div>

        ${
          output.last_episode_to_air
            ? `<p>${output.number_of_seasons} сезон ${output.last_episode_to_air.episode_number} серий вышло</p>`
            : ''
        }

        <p class="mainInfoPost">Описание: ${output.overview}</p>

        <br>
        <div class = 'youtube'></div>

        </div>
        `
    })
    .then(() => {
      let youtube = movie.querySelector('.youtube')
      fetch(
        `https://api.themoviedb.org/3/${this.dataset.type}/${this.dataset.id}/videos?api_key=fe55bc0871414d8edb95f62510083b42&language=ru`
      )
        .then((value) => {
          console.log(value)
          if (!value.ok) {
            return Promise.reject(new Error(value.status))
          }
          return value.json()
        })
        .then((output) => {
          console.log(output)
          let videoFrame = '<h5 class = "text-info title2Post">Трейлеры</h5>'

          if (output.results.length === 0) {
            videoFrame = '<p>Трейлер отсутствует</p>'
          }

          output.results.forEach((item) => {
            videoFrame +=
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
              item.key +
              '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          })
          youtube.innerHTML = videoFrame
        })
        .catch((reason) => {
          youtube.innerHTML = 'Видео отсутствует'
          console.error(reason || reason.status)
        })
    })
    .catch(function (reason) {
      movie.innerHTML = 'Упс, что то пошло не так!'
      console.error(reason || reason.status)
    })
}

document.addEventListener('DOMContentLoaded', function () {
  fetch(
    'https://api.themoviedb.org/3/trending/all/week?api_key=fe55bc0871414d8edb95f62510083b42&language=ru'
  )
    .then(function (value) {
      // console.log();
      if (value.status !== 200) {
        return Promise.reject(value)
      }
      return value.json()
    })
    .then(function (output) {
      console.log('output:', output)
      let inner = ''
      if (output.results.length === 0) {
        inner =
          '<h2 class = "col-12 text-center text-info">По вашему запросу ничего не найдено</h2>'
      }

      output.results.forEach(function (item) {
        let nameItem = item.name || item.title
        let mediaType = item.title ? 'movie' : 'tv'
        const poster = item.poster_path
          ? urlposter + item.poster_path
          : './img/poster.png'
        let dataInfo = `data-id="${item.id}" data-type="${mediaType}"`
        inner += `
                <div class=" col-12 col-md-4 col-xl-3 postHover" item>
                <img src="${poster}" class="img_poster" alt="${nameItem}" ${dataInfo}>
                <h5>${nameItem}</h5>
                </div>
                `
      })

      movie.innerHTML = inner

      addEventMedia()
    })
    .catch(function (reason) {
      movie.innerHTML = 'Упс, что то пошло не так!'
      console.error(reason || reason.status)
    })
})
