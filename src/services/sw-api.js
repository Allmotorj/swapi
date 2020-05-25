const starshipEndpoint = 'https://swapi.dev/api/starships/'
export default function getAllStarships() {
    console.log("Hello from getAllStarships!")
    return fetch(starshipEndpoint)
    .then(res => {
        return res.json();
    })
    .then(json=>json.results)
}