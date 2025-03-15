# Recipe Lab

### Introduction

In this lab, you will be building a recipe CRUD app using Express as a web server and a local JSON file as a back end.

### Setup

You will have some recipes to start with in `data/recipe-data.json`. **You** will have to create a JavaScript file in the `src` directory to be your program.

### Usage Goal

You will know you're successful when you can run your JS file, and then, while the server is running, make requests to the URLs in your specifications and get the response you expect.

You will run the code in your `src` directory by navigating into that directory and running `node index.js`. 

- You can alternately run `node --watch [file name]` to re-run the server every time changes are saved to the file or any file in its directory.

### Data Shape

The data in `recipe-data.json` is an array of recipes. Each recipe is an object with the following properties:

- `name` - the name of the recipe
- `cookingMethod` - the cooking method of the recipe
- `ingredients` - an array of ingredients

Check out the data in `data/recipe-data.json` to see what that looks like.

**There is also a backup of this file**. You will find it in `data/backup-recipe-data.json`. This is because it is very easy to write code that deletes your data. Always have a backup!

### Specifications

Your API should have the following features:

#### Find All Recipes

When the app receives an HTTP request for all recipes, it reads from the data file and returns all recipes in JSON format.

##### Example Request

`http://localhost:3000/find-recipes`

##### Example Response

```json
[
  {
    "name": "Spaghetti with White Sauce",
    "cookingMethod": "stove-top boil",
    "ingredients": [
      "spaghetti",
      "butter",
      "flour",
      "milk",
      "salt",
      "pepper",
      "garlic",
      "parmesan cheese"
    ]
  },
  {
    "name": "Spaghetti with Red Sauce",
    "cookingMethod": "stove-top boil",
    "ingredients": [
      "spaghetti",
      "tomato sauce",
      "tomato paste",
      "ground beef",
      "salt",
      "pepper",
      "garlic",
      "onion",
      "parmesan cheese"
    ]
  },
  {
    "name": "Fried Chicken",
    "cookingMethod": "deep fry",
    "ingredients": ["chicken", "flour", "salt", "pepper", "garlic", "oil"]
  },
  {
    "name": "Baked Chicken",
    "cookingMethod": "oven bake",
    "ingredients": ["chicken", "salt", "pepper", "garlic", "oil"]
  }
]
```

#### Find One Recipe

When the app receives an HTTP request for a specific recipe, it reads from the data file and returns that recipe in JSON format.

##### Example Request

`http://locahost:3000/find-recipe/1`

##### Example Response

```json
{
  "name": "Spaghetti with Red Sauce",
  "cookingMethod": "stove-top boil",
  "ingredients": [
    "spaghetti",
    "tomato sauce",
    "tomato paste",
    "ground beef",
    "salt",
    "pepper",
    "garlic",
    "onion",
    "parmesan cheese"
  ]
}
```

#### Delete One Recipe

When the app receives an HTTP request to delete a specific recipe, it deletes  that recipe from the data file and returns an HTTP message indicating it's done so.

##### Example Request

`http://localhost:3000/delete-recipe/1`


##### Example Response

You can decide how to indicate that the recipe has been deleted. One method is to simply send back a string with a message that it's been deleted. Another, more common method is to send back the data that was deleted.

The way to check that you have achieved this one is to look at the data file itself and see if the recipe at that index has been removed.


#### Update the Name of One Recipe

When the app receives an HTTP request to update the name of a specific recipe, it updates the recipe name in the data file and returns an HTTP message indicating it's done so.

##### Example Request

`http://localhost:3000/update-recipe/1/Lasagna`
