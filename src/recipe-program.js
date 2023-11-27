const express = require('express');
const fs = require('fs').promises;

const app = express();

const FilePath = "/Users/staysha/Documents/dev/recipea-web-server-lab/data/recipe-data.json";

app.use(express.json());


app.listen(3000, () => {
    console.log("Our hello user app is now listening on http://localhost:3000");
  });

  const getAllRecipes = async () => {
    return JSON.parse(await fs.readFile(FilePath, "utf8"));
  };
  
  const getRecipe = async (id) => {
    const data = await fs.readFile(FilePath, "utf8");
    const recipes = JSON.parse(data);
    return recipes.find((recipe) => recipe.id === id);
  };
  
  const deleteRecipe = async (id) => {
    const data = await fs.readFile(FilePath, "utf8");
    const recipes = JSON.parse(data).filter((recipe) => recipe.id !== id);
    const jsonVersion = JSON.stringify(recipes, null, 2);
    await fs.writeFile(FilePath, jsonVersion, "utf8");
  };
  
  
  app.get("/read-all-recipes", async (req, res) => {
    const recipes = await getAllRecipes();
    res.send(JSON.stringify(recipes, null, 2));
  });
  
  app.get("/read-recipe/:id", async (req, res) => {
    const recipes = await getRecipe(Number(req.params.id));
    res.send(JSON.stringify(recipes));
  });
  
  app.get("/delete-recipe/:id", async (req, res) => {
    await deleteRecipe(Number(req.params.id));
    res.send("Successfully deleted recipe.");
  });