import Router from "./router.js"
import backgroundImages from "./backgroundOptions.js"


let background = document.querySelector('.all')
let homeImage = document.querySelector('.homehome')
let universeImage = document.querySelector('.universe')
let explorerImage = document.querySelector('.explorer')

const backgroundImage = backgroundImages({background})

universeImage.addEventListener('click', () => {backgroundImage.universe()})

explorerImage.addEventListener('click', () => {backgroundImage.explore()})

homeImage.addEventListener('click', () => {backgroundImage.home()})

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/o-universo", "/pages/o-universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")
router.add("/index.html", "/pages/home.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()