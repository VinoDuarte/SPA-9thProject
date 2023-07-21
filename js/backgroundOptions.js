export default function backgroundImages({background}) {
function universe() {
  background.classList.add('universoImage')
  background.classList.remove('exploracaoImage')
}

function explore() {
  background.classList.add('exploracaoImage')
  background.classList.remove('universoImage')
}

function home() {
  background.classList.remove('universoImage')
  background.classList.remove('exploracaoImage')
}

return {
  universe,
  explore,
  home,
}

}