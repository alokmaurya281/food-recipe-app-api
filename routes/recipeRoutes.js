const express = require("express");

const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");


const { searchRecipes , getRecipeInfo,getSimilarRecipes, getRandomRecipes} = require("../controllers/recipeController");
  

router.route("/recipe/search/:query").get(validateToken, searchRecipes);
router.route("/recipe/:id/information").get(validateToken, getRecipeInfo);
router.route("/recipe/:id/similar").get(validateToken, getSimilarRecipes);
router.route("/recipe/random/:number").get(validateToken, getRandomRecipes);




module.exports = router;
