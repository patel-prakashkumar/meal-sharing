const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const findTableData = await knex.select().table('reservation')
        if (findTableData.length === 0) {
            res.json({ mesage: "There are not available any Reservation" })
        } else {
            res.json(findTableData);
        }
    } catch (error) {
        res.status(404).json({ error: "Bad Get Request" });
    }
});

router.post("/", async (req, res) => {
    try {
        const insertData = await knex('reservation').insert({ 
            number_of_guests: req.body.number_of_guests, 
            meal_id: req.body.meal_id, 
            created_date: req.body.created_date, 
            contact_phonenumber: req.body.contact_phonenumber, 
            contact_name: req.body.contact_name, 
            contact_email: req.body.contact_email 
        });
        if (!insertData.length) {
            res.status(403).json({error : "Data is not inserted in Table"})
        } else {
            res.status(200).json({ message: "Data inserted in table", key: insertData })
        }
    } catch (error) {
        throw res.status(404).json({ error: "There is error in Page try again" });
    }
})

router.get("/:id", async (req, res) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const data = await knex.select().table('reservation').where('id', req.params.id);
        if (data.length === 0) {
            res.status(404).json({ mesage: "There are not available any reviews" })
        } else {
            res.json(data);
        }
    } catch (error) {
        res.status(404).json({ error: "There is error in Page try again" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateData = await knex('reservation').where('id', req.params.id).update('number_of_guests', 7)
        if (updateData === 0) {
            res.status(403).json("There is error update request rejected")
        } else {
            res.status(200).json({ message: "Updated data in table", key: updateData })
        }
    } catch (error) {
        throw res.status(403).json({ error: "There is error in Page try again" });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleteData = await knex('reservation').where('id', req.params.id).del()
        if (!deleteData) {
            res.status(404).json({ error: "Id doesn't exist in table" })
        } else {
            res.status(200).json({ message: "Deleted data in table", key: deleteData })
        }
    } catch (error) {
        throw res.status(403).json({ error: "There is error in Page try again" });
    }
})

module.exports = router;
