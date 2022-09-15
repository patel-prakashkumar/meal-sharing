const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex.select().table('meal')
    res.json(titles);
  } catch (error) {
    throw res.status(404).json(error);
  }
});

router.post("/", async(req, res) => {
  try {
    const insertData = await knex('meal').insert({ title: 'Lunch', description: 'Full Lunch', location: 'vallenbæk', when: '2022-09-17', max_reservations: 5, price: 200, created_date: '2022-09-17' });
    res.json(insertData) 
  } catch (error) {
    throw res.status(404).json(error);
  }
})

router.get("/:id", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info

    const data = await knex.select().table('meal').where('id', req.params.id);
    if(data.length === 0){
      res.status(404).json("Id is not avialble in database")
    }
    res.json(data);
  } catch (error) {
    throw res.status(404).json(error);
  }
});

router.put("/:id", async(req, res) => {
  try {
    const updateData = await knex('meal').where('id', req.params.id).update('title', 'Lunch')
    console.log(updateData)
    res.json(updateData) 
  } catch (error) {
    throw res.status(404).json(error);
  }
})

router.delete("/:id", async(req, res) => {
  try {
    const deleteData = await knex('meal').where('id', req.params.id).del()
    res.json(deleteData) 
  } catch (error) {
    throw res.status(404).json(error);
  }
})

module.exports = router;
