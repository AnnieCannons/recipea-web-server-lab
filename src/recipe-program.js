const express = require('express');
const fs = require('fs').promises;

const app = express();

const FILE_PATH = 'data/recipea-data.json';

app.use(express.json());


app.listen(3000, () => {
    console.log("Our hello user app is now listening on http://localhost:3000");
  });

let recipes = [];

async function loadRecipes() {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf8');
    recipes = JSON.parse(data);
  } catch (error) {
    console.error('Failed to load recipes:', error);
  }
}

async function saveRecipes() {
    try {
      await fs.writeFile(FILE_PATH, JSON.stringify(recipes, null, 2));
      console.log('Recipes saved successfully');
    } catch (error) {
      console.error('Failed to save recipes:', error);
    }
  }
  

app.get('/find-recipes', (req, res) => {
    res.json(recipes);
});

app.get('/find-recipe/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find((r) => r.id === recipeId);

  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

app.delete('/trash-recipe/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);
  
    if (recipeId >= 0 && recipeId <= recipes.length - 1) {
      const deletedRecipe = recipes.splice(recipeId, 1);
      saveRecipes();
      res.json(deletedRecipe);
    } else {
      res.status(404).send('Recipe not found');
    }
  });
  

loadRecipes();
