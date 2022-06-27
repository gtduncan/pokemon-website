const pokemon = ['charmander', 'bulbasaur', 'squirtle'];
const pokemonIDs = ['001', '004', '007']

// DOM = Document Object Model
// loop over every ID
// create an HTML element
// set the HTML element values
// append the HTML element to the DOM

pokemonIDs.map((id) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log('img url', imgUrl);
    // adding a div to house the img element
    let div = document.createElement('div'); // adding a div to house the img element
    div.setAttribute('class', 'pokemon-card'); // setting the class of the div
    let img = document.createElement('img'); // creating the img element
    img.src = imgUrl;
    div.append(img);
    document.body.append(div);
})