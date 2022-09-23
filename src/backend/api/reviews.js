const { query } = require("express");
const express = require("express");
const { max } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get('/', async (req, res) => {
    try {
        const reviewList = await knex('review').select('*')
        if (!reviewList.length) {
            res.status(404).json("There are not available any reviews")
        } else {
            res.json(reviewList);
        }
    } catch (error) {
        throw res.status(404).json({ error: "There is error in Page try again" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const reviewList = await knex.from('review').select('*').where('meal_id', id);
        if (!reviewList.length) {
            res.status(404).json("There are not available any reviews")
        } else {
            res.json(reviewList);
        }
    } catch (error) {
        throw res.status(404).json({ error: "There is error in Page try again" });
    }
})
router.post('/', async (req, res) => {
    try {
        const insertData = await knex('review').insert({
            title: req.body.title,
            description: req.body.description,
            meal_id: req.body.meal_id,
            stars: req.body.stars,
            created_date: req.body.created_date,
        });
        if (!insertData.length) {
            res.status(403).json("Data is not inserted in Table")
        } else {
            res.status(200).json({ message: "Data inserted in table", key: insertData })
        }
    } catch (error) {
        throw res.status(404).json({ error: "There is error in Page try again" });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const reviewList = await knex.from('review').select('*').where('id', id);
        console.log(reviewList)
        if (!reviewList.length) {
            res.status(404).json("There are not available any reviews")
        } else {
            res.json(reviewList);
        }
    } catch (error) {
        throw res.status(404).json({ error: "There is error in Page try again" });
    }
})


router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await knex("review").where('id', id).update(req.body);
        if (updateData === 0) {
            res.status(403).json("There is error update request rejected")
        } else {
            res.status(201).json({ message: "Updated data in table", key: updateData })
        }
    } catch (error) {
        throw res.status(403).json({ error: "There is error in Page try again" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteData = await knex("review").where('id', id).del();
        if (deleteData === 0) {
            res.status(403).json("There is error delete request rejected")
        } else {
            res.status(201).json({ message: "Deleted data in table", key: deleteData})
        }
    } catch (error) {
        throw res.status(403).json({ error: "There is error in Page try again" });
    }
});

module.exports = router;