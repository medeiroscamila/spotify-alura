const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');
const greetingElement = document.getElementById('greeting');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');

    setGreeting();
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return
    }
    
    requestApi(searchTerm);
})

function setGreeting() {
 
  const now = new Date();
  const currentHour = now.getHours();

 
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Bom dia';
  } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Boa tarde';
  } else {
      greeting = 'Boa noite';
  }

 
  greetingElement.innerText = greeting;
}


window.addEventListener('DOMContentLoaded', function () {
  setGreeting();
});