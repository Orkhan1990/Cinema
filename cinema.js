let popularMovies = document.querySelector("#popular_movies");
let bestComedies = document.querySelector("#best_comedies");
let actionAndAdventure = document.querySelector("#action_and_adventure");
let leftIcon = document.querySelector(".left");
let rightIcon = document.querySelector(".right");
let bestComediesLeftIcon = document.querySelector("#best_comedies_left_arrow");
let bestComediesRightIcon = document.querySelector(
  "#best_comedies_right_arrow"
);
let actionAndAdventureLeftIcon=document.querySelector('#action_and_adventure_left_arrow');
let actionAndAdventureRightIcon=document.querySelector('#action_and_adventure_right_arrow');
let videos=document.querySelector('.videos');
let imageUrl = "https://image.tmdb.org/t/p/w500";

fetch(
  "https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=hard"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(`${imageUrl}${element.backdrop_path}`);
      popularMovies.innerHTML += `
        <div class="film_image">
        <img src="${imageUrl}${element.backdrop_path}"/>
        <h2>${element.title}</h2>
       </div>
        `;
    });
    let count = 0;
    function slide() {
      for (let i = 0; i < popularMovies.children.length; i++) {
        popularMovies.children[i].style.transform = `translateX(${
          -300 * count
        }px)`;
      }
    }
    setInterval(() => {
      if (count < popularMovies.children.length - 4) {
        count++;
        slide();
      } else {
        count = 0;
        slide();
      }
    }, 3000);

    leftIcon.addEventListener("click", () => {
      if (count > 0) {
        count--;
        slide();
      } else {
        count = 0;
        slide();
      }
    });
    rightIcon.addEventListener("click", () => {
      if (count < popularMovies.children.length - 4) {
        count++;
        slide();
      } else {
        count = 0;
        slide();
      }
    });
  });

fetch(
  "https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=comedy"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((card) => {
      bestComedies.innerHTML += `
        <div class="film_image">
        <img src="${imageUrl + card.backdrop_path}" />
        <h2>${card.title}</h2>
      </div>
        `;
    });
    let count = 0;
    function slide() {
      for (let i = 0; i < bestComedies.children.length; i++) {
        bestComedies.children[i].style.transform = `translateX(${
          -300 * count
        }px)`;
      }
    }
    setInterval(() => {
      if (count < bestComedies.children.length - 4) {
        count++;
        slide();
      } else {
        count = 0;
        slide();
      }
    }, 3000);

    bestComediesLeftIcon.addEventListener("click", () => {
      if (count > 0) {
        count--;
        slide();
      } else {
        count = 0;
        slide();
      }
    });
    bestComediesRightIcon.addEventListener("click", () => {
      if (count < bestComedies.children.length - 4) {
        count++;
        slide();
      } else {
        count = 0;
        slide();
      }
    });
  });

fetch(
  "https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=action"
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((card) => {
      actionAndAdventure.innerHTML += `
        <div class="film_image">
                <img src="${imageUrl}${card.backdrop_path}" />
                <h2>${card.title}</h2>
        </div>
        `;
    });

    let count = 0;
    function slide() {
      for (let i = 0; i < actionAndAdventure.children.length; i++) {
        actionAndAdventure.children[i].style.transform = `translateX(${
          -300 * count
        }px)`;
      }
    }
    setInterval(() => {
      if (count < actionAndAdventure.children.length - 4) {
        count++;
        slide();
      } else {
        count = 0;
        slide();
      }
    }, 3000);

    actionAndAdventureLeftIcon.addEventListener("click", () => {
      if (count > 0) {
        count--;
        slide();
      } else {
        count = 0;
        slide();
      }
    });
    actionAndAdventureRightIcon.addEventListener("click", () => {
      if (count < actionAndAdventure.children.length - 4) {
        count++;
        slide();
      } else {
        count = 0;
        slide();
      }
    });
  });


  fetch('./videosapi/video.json')
  .then(resp=>resp.json())
  .then(data=>{
    console.log(data);
    data.forEach(card=>{
        videos.innerHTML+=
        `
        <div class="video">
        <video
          controls
          src="${card.video}"
        ></video>
        <i class="fa-solid fa-x"></i>
        <h2 class="${card.color}">${card.title}</h2>
      </div>
        `
    })
  })
