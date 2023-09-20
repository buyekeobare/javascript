const url ="https://swapi.dev/api/films"

async function getFilms() {
  const response = await fetch(url)
  const films = await response.json();
  console.log('films', films);
}
getFilms();