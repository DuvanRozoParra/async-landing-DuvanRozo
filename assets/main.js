
const API = 'https://free-to-play-games-database.p.rapidapi.com/api/games'

const id = null || document.getElementById('videogames');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd276d8c624mshcbbfcc7e1b7f610p1ebcc9jsnaf4333d5659f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

async function accesoApi(urlApi) {
  const response = await fetch(urlApi,options)
  const datos = await response.json();
  return datos
}

(async () => {
  try {
    
    const gamen = await accesoApi(API)
    let html = `
    ${gamen.map((game) => (`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${game.thumbnail}" alt="imagen free to play" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            free to play
          </h3>
        </div>
      </div>
    `))}

    `;

    id.innerHTML = html;

  } catch (error) {
    console.log(error)
  }
})();
