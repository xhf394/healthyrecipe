let query;
const RECIPE_BASE_URL = `https://api.edamam.com/api/food-database/parser?ingr=${query}&app_id=01ac8168&app_key=19280b66ad58dad7a51dea6bdd896993`;

const fetchRecipies = query => 
  fetch(`https://api.edamam.com/api/food-database/parser?ingr=${query}&app_id=01ac8168&app_key=19280b66ad58dad7a51dea6bdd896993`)
    .then(response => response.json());


export {
  fetchRecipies,	
}