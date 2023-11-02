const express = require("express");

const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");


const { searchRecipes , getRecipeInfo,getSimilarRecipes} = require("../controllers/recipeController");
  

router.route("/search/:query").get(validateToken, searchRecipes);
router.route("/:id/information").get(validateToken, getRecipeInfo);
router.route("/:id/similar").get(validateToken, getSimilarRecipes);



module.exports = router;
