(()=>{"use strict";var n={492:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Roboto|Suez+One);"]),a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  outline: none;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  background-color: #fafafa;\r\n  background: #eef8ff;\r\n  font-family: Trebuchet MS, Helvetica;\r\n}\r\n\r\n/* Шапка сайта */\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 10px 0.5% 0px 0.5%;\r\n  background: transparent;\r\n  float: left;\r\n  position: fixed;\r\n}\r\n\r\nheader #logo {\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\nheader #logo span {\r\n  font-size: 1.7em;\r\n  line-height: 45px;\r\n  margin-left: 40px;\r\n  font-family: 'Suez One', serif;\r\n}\r\n\r\n@media (min-width: 701px) {\r\n  #logo {\r\n    float: left;\r\n    width: 30%;\r\n    font-size: 1.1em;\r\n  }\r\n\r\n  #about {\r\n    float: right;\r\n    width: 67%;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #logo {\r\n    margin-top: 15px;\r\n    width: 100%;\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  #about {\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n#about {\r\n  text-align: center;\r\n  font-size: 1em;\r\n  line-height: 40px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#about > a {\r\n  color: #fff;\r\n}\r\n\r\n#about > a:hover {\r\n  color: #b0b0b0;\r\n  text-decoration: underline;\r\n}\r\n\r\n#about > a:not(:last-child) {\r\n  margin-right: 7%;\r\n}\r\n\r\n/* Стили для фиксированной шапки */\r\n\r\n.fixed {\r\n  z-index: 900;\r\n  background-color: rgb(146, 146, 146);\r\n  border-bottom: 1px solid silver;\r\n}\r\n\r\nheader.fixed #logo {\r\n  color: #bbbbbb;\r\n}\r\n\r\n.fixed #about a {\r\n  color: #bbbbbb;\r\n}\r\n.fixed #about a:hover {\r\n  color: #7c7c7c;\r\n}\r\n\r\n/* Главный блок на сайте */\r\n\r\n#top {\r\n  width: 100%;\r\n  background-image: url(https://thumbs.dfs.ivi.ru/storage3/contents/a/1/6a948673a6db896cf63e9b80414e61.jpg);\r\n  background-blend-mode: multiply;\r\n  background-color: #2e3a44;\r\n  background-size: cover;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n#top h1 {\r\n  padding-top: 20%;\r\n  font-size: 100px;\r\n}\r\n\r\n#top h3 {\r\n  color: #ccc;\r\n  font-size: 65px;\r\n}\r\n\r\n@media (min-width: 1001px) {\r\n  #top {\r\n    font-size: 3em;\r\n    height: 1000px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) and (min-width: 651px) {\r\n  #top {\r\n    font-size: 2em;\r\n    height: 700px;\r\n  }\r\n\r\n  #top h1 {\r\n    padding-top: 20%;\r\n    font-size: 70px;\r\n  }\r\n\r\n  #top h3 {\r\n    color: #ccc;\r\n    font-size: 45px;\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) and (min-width: 451px) {\r\n  #top {\r\n    font-size: 1.3em;\r\n    height: 500px;\r\n  }\r\n\r\n  #top h1 {\r\n    padding-top: 35%;\r\n    font-size: 55px;\r\n  }\r\n\r\n  #top h3 {\r\n    color: #ccc;\r\n    font-size: 35px;\r\n  }\r\n}\r\n\r\n/* Блок с новостями */\r\n\r\n#main {\r\n  float: left;\r\n  background-color: #f6f6f6;\r\n  border-top: 2px solid silver;\r\n  color: #484848;\r\n  font-size: 1.3em;\r\n  width: 100%;\r\n  padding: 0 10% 0 10%;\r\n}\r\n\r\n.intro {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.text {\r\n  text-align: center;\r\n  margin: 20px;\r\n  font-size: 25px;\r\n}\r\n\r\n#main2 {\r\n  float: left;\r\n  background-color: #f6f6f6;\r\n  border-top: 2px solid silver;\r\n  color: #484848;\r\n  font-size: 1.3em;\r\n}\r\n\r\n@media (min-width: 1401px) {\r\n  #main {\r\n    padding: 0 10% 0 10%;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1400px) {\r\n  #main {\r\n    padding: 100px 10%;\r\n    width: 100%;\r\n  }\r\n\r\n  .text {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #main div {\r\n    width: 100% !important;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .intro {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .text {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n#main h2 {\r\n  font-size: 3em;\r\n}\r\n#main span {\r\n  color: #a0a0a0;\r\n}\r\n\r\n/* Блок новинки */\r\n\r\n#overview {\r\n  float: left;\r\n  background-image: url(https://img.championat.com/news/big/z/z/obzor-matrica-4-voskreshenie_1639587558419925185.jpg);\r\n\r\n  background-blend-mode: multiply;\r\n  background-color: #403f40;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n\r\n  padding: 100px 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n#overview h2 {\r\n  font-size: 4em;\r\n}\r\n#overview h4 {\r\n  color: #ccc;\r\n}\r\n\r\n@media (min-width: 561px) {\r\n  #overview h2 {\r\n    font-size: 4em;\r\n  }\r\n}\r\n\r\n@media (max-width: 560px) {\r\n  #overview h2 {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n/**/\r\n.img_poster {\r\n  float: left;\r\n  width: 30%;\r\n  height: 90%;\r\n  margin-right: 5%;\r\n  margin-top: 50px;\r\n  border-radius: 30px;\r\n}\r\n.img_poster:nth-child(odd) {\r\n  margin-left: 0%;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #overview .img_poster {\r\n    width: 80% !important;\r\n    margin-right: 0 !important;\r\n    margin-left: 10% !important;\r\n  }\r\n}\r\n.name {\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 2em;\r\n  margin-top: 100px;\r\n}\r\n\r\n/**/\r\n\r\n/* #overview .img {\r\n  float: left;\r\n  width: 30%;\r\n  margin-right: 5%;\r\n  margin-top: 50px;\r\n} */\r\n\r\n/* #overview .img:nth-child(odd) {\r\n  margin-left: 18%;\r\n} */\r\n\r\n#overview img {\r\n  background: 0;\r\n  padding: 1px;\r\n  border: 0px solid silver;\r\n  float: left;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  border-radius: 30px;\r\n}\r\n\r\n#overview span {\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 2em;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #overview .img {\r\n    width: 80% !important;\r\n    margin-right: 0 !important;\r\n    margin-left: 10% !important;\r\n  }\r\n}\r\n\r\n/* Блок с контактами */\r\n#contacts {\r\n  width: 100%;\r\n  float: left;\r\n  padding-bottom: 40px;\r\n  padding-top: 70px;\r\n  border-top: 4px solid #ccc;\r\n  background: #f4f4f4;\r\n\r\n  background-image: url(https://img.audiomania.ru/images/content/5b42c281d8615d2c4b07cb00d396d342.jpg);\r\n  background-blend-mode: multiply;\r\n  background-color: #2e3a44;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #fff;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  font-family: 'Roboto Slab', serif;\r\n  font-weight: lighter;\r\n}\r\n\r\n#contacts h5 {\r\n  font-size: 3em;\r\n  color: #e2eaec;\r\n}\r\n\r\n#form_input {\r\n  margin-top: 15px;\r\n  font-size: 1.1em;\r\n}\r\n\r\n@media (min-width: 1051px) {\r\n  #form_input {\r\n    width: 35%;\r\n    margin-left: 38%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1050px) {\r\n  #form_input {\r\n    width: 90%;\r\n    margin-left: 10%;\r\n  }\r\n}\r\n\r\n#form_input label {\r\n  color: #f3f5f3;\r\n  cursor: pointer;\r\n  font-size: 1.4em;\r\n  font-family: 'Roboto Slab', serif;\r\n}\r\n\r\n#form_input label > span {\r\n  color: #e87e7e;\r\n}\r\n\r\n#form_input input,\r\n#form_input textarea {\r\n  margin-bottom: 10px;\r\n  width: 70%;\r\n  padding: 10px 2%;\r\n  border-radius: 7px;\r\n  border: 2px solid silver;\r\n  font-size: 0.9em;\r\n  color: #4a4a4a;\r\n}\r\n\r\n#form_input input:focus,\r\n#form_input textarea:focus {\r\n  border-color: #333;\r\n}\r\n\r\n.btn {\r\n  float: left;\r\n  border-radius: 5px;\r\n  padding: 5px 9px;\r\n  font-size: 1.2em;\r\n  background-color: #ec6550;\r\n  text-shadow: #454545 0 0 2px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-family: 'Roboto Slab', serif;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #c15443;\r\n}\r\n\r\n/* фильмы */\r\n\r\n#faq {\r\n  background-color: #fff;\r\n  border-top: 2px dashed #e4e3e3;\r\n  width: 100%;\r\n  float: left;\r\n  padding-top: 70px;\r\n  padding-bottom: 70px;\r\n}\r\n\r\n@media (min-width: 801px) {\r\n  #faq div {\r\n    width: 25%;\r\n    margin-left: 6%;\r\n    float: left;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  #faq div {\r\n    width: 80%;\r\n    margin-left: 10%;\r\n    float: left;\r\n  }\r\n}\r\n\r\n#faq .title {\r\n  font-weight: lighter;\r\n  color: #a3a0ad;\r\n  margin-bottom: 20px;\r\n  font-size: 2.2em;\r\n}\r\n\r\n#faq .title a {\r\n  text-decoration: none;\r\n  color: #a3a0ad;\r\n}\r\n\r\n#faq .heading {\r\n  color: #7d7d7d;\r\n  font-size: 1.3em;\r\n  font-weight: bold;\r\n}\r\n\r\n#faq p {\r\n  font-family: Arimo, Helvetica, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  color: #4a4a4a;\r\n  font-size: 0.95em;\r\n  margin-bottom: 20px;\r\n}\r\n#faq .title {\r\n  cursor: pointer;\r\n}\r\n#faq .heading {\r\n  cursor: pointer;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: #a3a0ad;\r\n}\r\n\r\n.page {\r\n  overflow: hidden;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.img {\r\n  max-width: 90%;\r\n}\r\n\r\n.item {\r\n  margin: 15px 0;\r\n  text-align: center;\r\n}\r\n.spinner {\r\n  margin: 0 auto;\r\n  width: 100px;\r\n  height: 100px;\r\n  border: 10px dashed;\r\n  border-radius: 50%;\r\n  border-left-color: transparent;\r\n  border-top-color: #aaa;\r\n  border-right-color: #555;\r\n  border-bottom-color: #000;\r\n  animation: spin 500ms infinite linear;\r\n}\r\n@keyframes spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.form-control {\r\n  padding: 8px;\r\n  border: 2px solid #4d35d1;\r\n  border-radius: px;\r\n  outline: none;\r\n}\r\n\r\n.buttonback {\r\n  width: 100px;\r\n  outline: none;\r\n  border: 0;\r\n  background: transparent;\r\n  margin: 5px 0 5px 0;\r\n}\r\n\r\n.buttonbackSVG {\r\n  width: 38px;\r\n  height: 38px;\r\n}\r\n\r\n@media (min-width: 700px) {\r\n  .buttonbackSVG {\r\n    width: 38px;\r\n    height: 38px;\r\n  }\r\n}\r\n\r\n@media (max-width: 699px) {\r\n  .buttonbackSVG {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n}\r\n\r\n.postHover {\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.postHover:hover {\r\n  transform: scale(0.9);\r\n}\r\n\r\n/* Стиль постов */\r\n\r\n.titlePost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 40px;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.linkImgPost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.InfoPost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 20px;\r\n  margin-bottom: 50px;\r\n  text-align: end;\r\n}\r\n\r\n.mainInfoPost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 19px;\r\n}\r\n\r\n.title2Post {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 35px;\r\n}\r\n",""]);const s=a},552:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Roboto|Suez+One);"]),a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  outline: none;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\nbody {\r\n  background-color: #fafafa;\r\n  font-family: Trebuchet MS, Helvetica;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 10px 0.5% 0px 0.5%;\r\n  background: transparent;\r\n  float: left;\r\n  position: fixed;\r\n}\r\n\r\nheader #logo {\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\nheader #logo span {\r\n  font-size: 1.7em;\r\n  line-height: 45px;\r\n  margin-left: 40px;\r\n  font-family: 'Suez One', serif;\r\n}\r\n\r\n@media (min-width: 701px) {\r\n  #logo {\r\n    float: left;\r\n    width: 30%;\r\n    font-size: 1.1em;\r\n  }\r\n\r\n  #about {\r\n    float: right;\r\n    width: 67%;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #logo {\r\n    margin-top: 15px;\r\n    width: 100%;\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  #about {\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n#about {\r\n  text-align: center;\r\n  font-size: 1em;\r\n  line-height: 40px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#about > a {\r\n  color: #fff;\r\n}\r\n\r\n#about > a:hover {\r\n  color: #b0b0b0;\r\n  text-decoration: underline;\r\n}\r\n\r\n#about > a:not(:last-child) {\r\n  margin-right: 7%;\r\n}\r\n\r\n.img_poster {\r\n  float: left;\r\n  width: 30%;\r\n  height: 90%;\r\n  margin-right: 5%;\r\n  margin-top: 50px;\r\n  border-radius: 30px;\r\n}\r\n.img_poster:nth-child(odd) {\r\n  margin-left: 0%;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #overview .img_poster {\r\n    width: 80% !important;\r\n    margin-right: 0 !important;\r\n    margin-left: 10% !important;\r\n  }\r\n}\r\n.name {\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 2em;\r\n  margin-top: 100px;\r\n}\r\n\r\n#overview {\r\n  float: left;\r\n  background-image: url(https://img5.goodfon.ru/wallpaper/nbig/2/5e/dzhoker-joker-khoakin-feniks-joaquin-phoenix-litso-grim-cher.jpg);\r\n\r\n  background-blend-mode: multiply;\r\n  background-color: #403f40;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n\r\n  padding: 50px 50px;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n#overview h4 {\r\n  color: #ccc;\r\n  font-size: 1.5em;\r\n}\r\n@media (min-width: 700px) {\r\n  #overview h2 {\r\n    font-size: 3em;\r\n  }\r\n}\r\n\r\n@media (max-width: 699px) {\r\n  #overview h2 {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n#overview .img {\r\n  float: left;\r\n  width: 30%;\r\n  margin-right: 5%;\r\n  margin-top: 50px;\r\n}\r\n\r\n#overview .img:nth-child(odd) {\r\n  margin-left: 18%;\r\n}\r\n\r\n#overview img {\r\n  background: #fafafa;\r\n  padding: 0px;\r\n  border: 0px solid silver;\r\n  float: left;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  border-radius: 30px;\r\n}\r\n\r\n#overview span {\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 2em;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  #overview .img {\r\n    width: 80% !important;\r\n    margin-right: 0 !important;\r\n    margin-left: 10% !important;\r\n  }\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.jumbotron {\r\n  margin: 20px 0 30px 0;\r\n}\r\n\r\n.buttonback {\r\n  width: 100px;\r\n  outline: none;\r\n  border: 0;\r\n  background: transparent;\r\n  margin: 5px 0 5px 0;\r\n}\r\n\r\n.buttonbackSVG {\r\n  width: 38px;\r\n  height: 38px;\r\n}\r\n\r\n@media (min-width: 700px) {\r\n  .buttonbackSVG {\r\n    width: 38px;\r\n    height: 38px;\r\n  }\r\n}\r\n\r\n@media (max-width: 699px) {\r\n  .buttonbackSVG {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n}\r\n\r\n.postHover {\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n.postHover:hover {\r\n  transform: scale(0.9);\r\n}\r\n\r\n/* Стиль постов */\r\n\r\n.titlePost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 40px;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.linkImgPost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.InfoPost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 20px;\r\n  margin-bottom: 50px;\r\n  text-align: end;\r\n}\r\n\r\n.mainInfoPost {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 19px;\r\n}\r\n\r\n.title2Post {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 35px;\r\n}\r\n",""]);const s=a},902:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: #fcfcfc;\r\n}\r\n\r\nfooter {\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #0a1835;\r\n  height: auto;\r\n  width: 100vw;\r\n  font-family: 'Open Sans';\r\n  padding-top: 40px;\r\n  color: #fff;\r\n}\r\n\r\n.footer-content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\n.footer-content h3 {\r\n  font-size: 1.8rem;\r\n  font-weight: 400;\r\n  text-transform: capitalize;\r\n  line-height: 3rem;\r\n}\r\n\r\n.footer-content p {\r\n  max-width: 500px;\r\n  margin: 10px auto;\r\n  line-height: 28px;\r\n  font-size: 14px;\r\n}\r\n\r\n.socials {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 1rem 0 3rem 0;\r\n}\r\n\r\n.socials li {\r\n  margin: 0 10px;\r\n}\r\n\r\n.socials a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.socials a i {\r\n  font-size: 1.1rem;\r\n  transition: color 0.4s ease;\r\n}\r\n\r\n.socials a:hover i {\r\n  color: #cc1e56;\r\n}\r\n\r\n.footer-bottom {\r\n  background: #070f1f;\r\n  width: 100vw;\r\n  padding: 20px 0;\r\n  text-align: center;\r\n}\r\n\r\n.footer-bottom p {\r\n  font-size: 14px;\r\n  word-spacing: 2px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.footer-bottom span {\r\n  text-transform: uppercase;\r\n  opacity: 0.4;\r\n  font-weight: 200;\r\n}\r\n\r\n.button-out {\r\n  display: none;\r\n}\r\n\r\n.button-auth a {\r\n  color: black;\r\n}\r\n\r\n/* .modal {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  display: none;\r\n  z-index: 999;\r\n} */\r\n\r\n.modal-auth {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.753);\r\n  /* display: none; */\r\n}\r\n\r\n.is-open {\r\n  display: flex;\r\n}\r\n\r\n.modal-dialog {\r\n  max-width: 780px;\r\n  width: 95%;\r\n  background: #ffffff;\r\n  border-radius: 5px;\r\n  margin: auto;\r\n  padding: 40px 45px;\r\n}\r\n\r\n.modal-dialog-auth {\r\n  width: auto;\r\n  position: relative;\r\n  top: 25%;\r\n}\r\n\r\n.label-auth {\r\n  display: block;\r\n  margin: 30px;\r\n}\r\n\r\n.label-auth span {\r\n  width: 80px;\r\n  display: inline-block;\r\n}\r\n\r\n.modal-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.modal-title {\r\n  margin: 0;\r\n  font-weight: bold;\r\n  font-size: 36px;\r\n  line-height: 42px;\r\n}\r\n\r\n.close {\r\n  font-size: 36px;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.close-auth {\r\n  font-size: 36px;\r\n  border: none;\r\n  background-color: transparent;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 20px;\r\n}\r\n\r\n.close-auth a {\r\n  color: black;\r\n}\r\n\r\n.modal-body {\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.sing {\r\n  position: fixed;\r\n  top: 20px;\r\n  right: 30px;\r\n}\r\n\r\n.user-name {\r\n  color: white;\r\n  border-bottom: 1px solid rgb(255, 255, 255);\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);e&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],d=e.base?l[0]+e.base:l[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var f=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)r[f].references++,r[f].updater(m);else{var h=o(m,e);e.byIndex=s,r.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);r[s].references--}for(var l=e(n,o),d=0;d<i.length;d++){var c=t(i[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=l}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=t(379),r=t.n(n),e=t(795),o=t.n(e),i=t(569),a=t.n(i),s=t(565),l=t.n(s),d=t(216),c=t.n(d),p=t(589),f=t.n(p),m=t(492),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=c(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var g=t(552),u={};u.styleTagTransform=f(),u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=c(),r()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals;var b=t(902),x={};if(x.styleTagTransform=f(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=c(),r()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,"/auth.html"===window.location.pathname){var v=document.getElementById("logInForm"),w=document.getElementById("login"),y=document.getElementById("password");console.log(v),v.addEventListener("submit",(function(n){n.preventDefault();var r={login:w.value,password:y.value};console.log(r.password),localStorage.setItem("user",JSON.stringify(r)),r.login?window.location.assign("http://localhost:8080/index.html"):alert("Enter login")})),localStorage.getItem("user")&&(JSON.parse(localStorage.getItem("user")),window.location.assign("http://localhost:8080/index.html"))}if("/index.html"===window.location.pathname){var k=document.querySelector(".user-name"),z=document.querySelector("#modal-btn");if(localStorage.getItem("user")){var _=JSON.parse(localStorage.getItem("user"));z.textContent="Log out",k.innerHTML=_.login,z.addEventListener("click",(function(){localStorage.removeItem("user"),z.textContent="Signin",k.innerHTML=""}))}}var S=document.querySelector("#search-form"),I=document.querySelector("#movies");console.log(I);var T="https://image.tmdb.org/t/p/w500";function M(){I.querySelectorAll("img[data-id]").forEach((function(n){n.style.cursor="pointer",n.addEventListener("click",P)}))}function P(){var n=this,r="";"movie"===this.dataset.type?r="https://api.themoviedb.org/3/movie/"+this.dataset.id+"?api_key=fe55bc0871414d8edb95f62510083b42&language=ru":"tv"===this.dataset.type?r="https://api.themoviedb.org/3/tv/"+this.dataset.id+"?api_key=fe55bc0871414d8edb95f62510083b42&language=ru":I.innerHTML='<h2 class = "col-12 text-center text-info">Произошла ошибка, повторите позже</h2>',fetch(r).then((function(n){return 200!==n.status?Promise.reject(new Error(n.status)):n.json()})).then((function(n){I.innerHTML='\n        <button type="button" class="buttonback text-info" onclick="javascript:location.reload()"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left buttonbackSVG" viewBox="0 0 16 16">\n        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>\n      </svg></button>\n        <h4 class = "col-12 text-center text-info titlePost">'.concat(n.name||n.title,'</h4>\n        <div class = "col-4">\n        <img src = \'').concat(T+n.poster_path,"' alt = '").concat(n.name||n.title,"'>\n        ").concat(n.homepage?"<p class = 'text-center linkImgPost'> <a href = \"".concat(n.homepage,'" target = "_blank" >Официальная страница</a> </p>'):"","\n        ").concat(n.imdb_id?"<p class = 'text-center linkImgPost'> <a href = \"https://imdb.com/title/".concat(n.imdb_id,'" target = "_blank" >Страница на IMDB</a> </p>'):"",'\n        </div>\n        <div class = "col-8">\n        <div class="InfoPost">\n            <p>Рейтинг: ').concat(n.vote_average,"</p>\n            <p>Статус: ").concat(n.status,"</p>\n            <p>Премьера: ").concat(n.first_air_date||n.release_date,"</p>\n            <p>Жанр: ").concat(n.genres.id,"</p>\n        </div>\n\n        ").concat(n.last_episode_to_air?"<p>".concat(n.number_of_seasons," сезон ").concat(n.last_episode_to_air.episode_number," серий вышло</p>"):"",'\n\n        <p class="mainInfoPost">Описание: ').concat(n.overview,"</p>\n\n        <br>\n        <div class = 'youtube'></div>\n\n        </div>\n        ")})).then((function(){var r=I.querySelector(".youtube");fetch("https://api.themoviedb.org/3/".concat(n.dataset.type,"/").concat(n.dataset.id,"/videos?api_key=fe55bc0871414d8edb95f62510083b42&language=ru")).then((function(n){return console.log(n),n.ok?n.json():Promise.reject(new Error(n.status))})).then((function(n){console.log(n);var t='<h5 class = "text-info title2Post">Трейлеры</h5>';0===n.results.length&&(t="<p>Трейлер отсутствует</p>"),n.results.forEach((function(n){t+='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+n.key+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'})),r.innerHTML=t})).catch((function(n){r.innerHTML="Видео отсутствует",console.error(n||n.status)}))})).catch((function(n){I.innerHTML="Упс, что то пошло не так!",console.error(n||n.status)}))}S.addEventListener("submit",(function(n){n.preventDefault();var r=document.querySelector(".form-control").value;if(0!==r.trim().length){var t="https://api.themoviedb.org/3/search/multi?api_key=fe55bc0871414d8edb95f62510083b42&language=ru&query="+r;I.innerHTML=' <div class="spinner"></div>',fetch(t).then((function(n){return console.log(),200!==n.status?Promise.reject(n):n.json()})).then((function(n){var r="";0===n.results.length&&(r='<h2 class = "col-12 text-center text-info">По вашему запросу ничего не найдено</h2>'),n.results.forEach((function(n){var t=n.name||n.title,e=n.poster_path?T+n.poster_path:"./img/poster.png",o="";"person"!==n.media_type&&(o='data-id="'.concat(n.id,'" data-type="').concat(n.media_type,'"')),r+='\n                <div class=" col-12 col-md-4 col-xl-3" item>\n                <img src="'.concat(e,'" class="img_poster" alt="').concat(t,'" ').concat(o,">\n                <h5>").concat(t,"</h5>\n                </div>\n                ")})),I.innerHTML=r,M()})).catch((function(n){I.innerHTML="Упс, что то пошло не так!",console.error(n||n.status)}))}else I.innerHTML='<h2 class = "col-12 text-center text-info">Заполните поле поиска</h2>'})),document.addEventListener("DOMContentLoaded",(function(){fetch("https://api.themoviedb.org/3/trending/all/week?api_key=fe55bc0871414d8edb95f62510083b42&language=ru").then((function(n){return 200!==n.status?Promise.reject(n):n.json()})).then((function(n){console.log("output:",n);var r="";0===n.results.length&&(r='<h2 class = "col-12 text-center text-info">По вашему запросу ничего не найдено</h2>'),n.results.forEach((function(n){var t=n.name||n.title,e=n.title?"movie":"tv",o=n.poster_path?T+n.poster_path:"./img/poster.png",i='data-id="'.concat(n.id,'" data-type="').concat(e,'"');r+='\n                <div class=" col-12 col-md-4 col-xl-3 postHover" item>\n                <img src="'.concat(o,'" class="img_poster" alt="').concat(t,'" ').concat(i,">\n                <h5>").concat(t,"</h5>\n                </div>\n                ")})),I.innerHTML=r,M()})).catch((function(n){I.innerHTML="Упс, что то пошло не так!",console.error(n||n.status)}))}))})()})();