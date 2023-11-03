const express = require("express");

const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");


const { searchRecipes , getRecipeInfo,getSimilarRecipes, getRandomRecipes} = require("../controllers/recipeController");
  

router.route("/search/:query").get(validateToken, searchRecipes);
router.route("/:id/information").get(validateToken, getRecipeInfo);
router.route("/:id/similar").get(validateToken, getSimilarRecipes);
router.route("/random/:number").get(validateToken, getRandomRecipes);




module.exports = router;
