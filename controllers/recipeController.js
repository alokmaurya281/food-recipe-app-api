const asyncHandler = require("express-async-handler");
const axios = require("axios");

// search recipes
// route get /api/v1/recipes/search/:query
//access private

const searchRecipes = asyncHandler(async (req, res) => {
  const query = req.params.query;
  const apiKey = process.env.SPOONACULAR_API;

  const searchUrl = "https://api.spoonacular.com/recipes/complexSearch";
  const response = await axios.get(
    `${searchUrl}?query=${query}&apiKey=${apiKey}`
  );

  if (response.status == 200) {
    res.status(response.status).json({
      data: response.data,
      status: true,
    });
  } else {
    res.status(response.status).json({
      error: response.data,
      status: false,
    });
  }
});

// get recipe info
// api/v1/recipes/:id/information
// access private

const getRecipeInfo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const apiKey = process.env.SPOONACULAR_API;
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`;
  const response = await axios.get(url);
  // const data = response.data;
  if (response.status == 200) {
    res.status(response.status).json({
      data: {
        id: response.data.id,
        vegeterian: response.data.vegeterian,
        title: response.data.title,
        readyInMinutes: response.data.readyInMinutes,
        servings: response.data.servings,
        sourceUrl: response.data.sourceUrl,
        image: response.data.image,
        imageType: response.data.imageType,
        summary: response.data.summary,
        dishTypes: response.data.dishTypes,
        instructions: response.data.instructions,
        spoonacularSourceUrl: response.data.spoonacularSourceUrl,
        pricePerServing: response.data.pricePerServing,
        extendedIngredients: response.data.extendedIngredients,
      },
      status: true,
    });
  } else {
    res.status(response.status).json({
      error: response.data,
      status: false,
    });
  }
});

// get similar recipe
// api/v1/recipes/:id/similar
// access private

const getSimilarRecipes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const apiKey = process.env.SPOONACULAR_API;
  const url = `https://api.spoonacular.com/recipes/${id}/similar?number=5&false&apiKey=${apiKey}`;
  const response = await axios.get(url);
  if (response.status == 200) {
    res.status(response.status).json({
      data: response.data,
      status: true,
    });
  } else {
    res.status(response.status).json({
      error: response.data,
      status: false,
    });
  }
});

// get random recipes
// api/v1/recipes/random
// access private

const getRandomRecipes = asyncHandler(async (req, res) => {
  const number = req.params.number;
  const apiKey = process.env.SPOONACULAR_API;
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${number}`;
  const response = await axios.get(url);
  const fData = response.data.recipes;
  let element = [];
  for (let index = 0; index < fData.length; index++) {
    let newele = 
      {
        id: response.data.recipes[index].id,
        vegeterian: response.data.recipes[index].vegeterian,
        title: response.data.recipes[index].title,
        readyInMinutes: response.data.recipes[index].readyInMinutes,
        servings: response.data.recipes[index].servings,
        sourceUrl: response.data.recipes[index].sourceUrl,
        image: response.data.recipes[index].image,
        imageType: response.data.recipes[index].imageType,
        dishTypes: response.data.recipes[index].dishTypes,
      };
      element.push(newele);
  }
  if (response.status == 200) {
    res.status(response.status).json({
      data: { element },
      status: true,
    });
  } else {
    res.status(response.status).json({
      error: response.data,
      status: false,
    });
  }
});

module.exports = {
  searchRecipes,
  getRecipeInfo,
  getSimilarRecipes,
  getRandomRecipes,
};
