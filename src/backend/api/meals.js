const { query } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");
/* router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const mealTable = await knex.select().table('meal');
    res.json(mealTable);
  } catch (error) {
    throw res.status(404).json(error);
  }
}); */
router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const maxPrice = req.query;
    const mealTable = await knex('meal').max(maxPrice);
    res.json(mealTable);
  } catch (error) {
    throw res.status(404).json(error);
  }
});


module.exports = router;

