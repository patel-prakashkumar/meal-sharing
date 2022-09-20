const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const findTableData = await knex.select().table('meal')
    if (findTableData.length === 0) {
      res.status(404).json("Table data is not available")
    } else {
      res.json(findTableData);
    }
  } catch (error) {
    res.status(404).json({ error: "Bad Get Request" });
  }
});
// Add Endpoint with req.body 
router.post("/", async (req, res) => {
  try {
    const insertData = await knex('meal').insert({ title: req.body.title, description: req.body.description, location: req.body.location, when: req.body.when, max_reservations: req.body.max_reservations, price: req.body.price, created_date: req.body.created_date});
    res.json(insertData);
  } catch (error) {
    res.status(403).json({ error: "Failed to Insert data in Table" });
  }
})

router.get("/:id", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const data = await knex.select().table('meal').where('id', req.params.id);
    if (data.length === 0) {
      res.status(404).json("Id is not available in database")
    } else {
      res.json(data);
    }
  } catch (error) {
    res.status(404).json({ error: "Bad Request" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateData = await knex('meal').where('id', req.params.id).update('title', 'Lunch')
    res.json(updateData)
  } catch (error) {
    res.status(400).json({ error: "unsuccessful PUT request" });
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await knex('meal').where('id', req.params.id).del();
   if (!deleteData) {
      res.status(404).json({ error: "Id doesn't exist in table" })
    } else {
      res.json({ "message": "Deleted meal" , Key: deleteData})
    }
  } catch (error) {
    res.status(409).json({ error: "unsuccessful Delete request" });
  }
})

module.exports = router;
