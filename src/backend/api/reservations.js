const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const findTableData = await knex.select().table('reservation')
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
        const insertData = await knex('reservation').insert({ number_of_guests: req.body.number_of_guests, meal_id: req.body.meal_id, created_date: req.body.created_date, contact_phonenumber: req.body.contact_phonenumber, contact_name: req.body.contact_name, contact_email: req.body.contact_email});
        res.json(insertData)
    } catch (error) {
        res.status(403).json({ error: "Failed to Insert data in Table" });
    }
})

router.get("/:id", async (req, res) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const data = await knex.select().table('reservation').where('id', req.params.id);
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
