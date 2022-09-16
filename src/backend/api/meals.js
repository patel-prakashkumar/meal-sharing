const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const findTableData = await knex.select().table('meal')
    if (findTableData.length === 0) {
      res.status(404).json("Table data not available")
    } else {
      res.json(findTableData);
    }
  } catch (error) {
    res.status(404).json({ error: "Bad Get Request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const insertData = await knex('meal').insert({ title: 'Lunch', description: 'Full Lunch', location: 'vallenbæk', when: '2022-09-17', max_reservations: 5, price: 200, created_date: '2022-09-17'});
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
      res.status(404).json("Id is not avialble in database")
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
      res.status(404).json({ error: "Id doesn't exit in table" })
    } else {
      res.json({ "message": "Deleted meal" , Key: deleteData})
    }
  } catch (error) {
    res.status(409).json({ error: "unsuccessful Delete request" });
  }
})

module.exports = router;
