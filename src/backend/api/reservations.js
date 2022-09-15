const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex.select().table('reservation')
        res.json(titles);
    } catch (error) {
        throw res.status(404).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const insertData = await knex('reservation').insert({ number_of_guests: 5, meal_id: 2, created_date: '2022-09-16', contact_phonenumber: '7777777', contact_name: 'Prakash Patel', contact_email: '123@gmail.com' });
        res.json(insertData)
    } catch (error) {
        throw res.status(404).json(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const data = await knex.select().table('reservation').where('id', req.params.id);
        if (data.length === 0) {
            res.status(404).json("Id is not avialble in database")
        } else {
            res.json(data);
        }
    } catch (error) {
        throw res.status(404).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateData = await knex('reservation').where('id', req.params.id).update('number_of_guests', 7)
        console.log(updateData)
        res.json(updateData)
    } catch (error) {
        throw res.status(404).json(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleteData = await knex('reservation').where('id', req.params.id).del()
        res.json(deleteData)
    } catch (error) {
        throw res.status(404).json(error);
    }
})

module.exports = router;
