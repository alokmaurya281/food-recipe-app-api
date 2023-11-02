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

// get similar recipe
// api/v1/recipes/:id/similar
// access private

const getSimilarRecipes = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const apiKey = process.env.SPOONACULAR_API;
  const url = `https://api.spoonacular.com/recipes/{id}/similar?number=20&false&apiKey=${apiKey}`;
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

module.exports = {
  searchRecipes,
  getRecipeInfo,
  getSimilarRecipes,
};
