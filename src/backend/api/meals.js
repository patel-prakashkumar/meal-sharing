const { query } = require("express");
const express = require("express");
const { max } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {

  if ("maxPrice" in req.query) {
    const maxPrice = Number(req.query.maxPrice);
    if (!maxPrice) {
      res.status(403).json('Please Enter Max Prise of Meal')
    } else {
      const meals = await knex("meal").where("price", "<", maxPrice);
      res.json(meals)
    }
  }
  if ("availableReservations" in req.query) {
    const mealsGuest = await knex.raw(`select * ,(max_reservations)-(number_of_guests) AS spots from meal inner join reservation on meal.id = reservation.meal_id where ((max_reservations)-(number_of_guests)) > 0`);
    let availableReservations = req.query.availableReservations;
    if (availableReservations != "true") {
      res.status(403).json("Reservation spots are not available in meal")
    }
    else {
      if (mealsGuest.spots <= 0) {
        res.status(403).json("error")
      }
      else {
        res.status(201).json({ Message: "Reservation meals still have spots left in meal", Result: mealsGuest });
      }
    }
  }
  if ("title" in req.query) {
    const title = req.query.title;
    console.log(title)
    if (!title) {
      res.status(403).json('Please Enter Meal title')
    } else {
      const meals = await knex('meal').where("title", "like", `%${title}%`)
      if (!meals.length) {
        res.status(403).json("Title is not Matching with Meal Title. ")
      } else {
        res.json(meals)
      }
    }
  }
  if ("dateAfter" in req.query) {
    const dateAfter = req.query.dateAfter;
    const date = new Date(dateAfter);
    console.log(date)
    if (!date) {
      res.status(403).json('Please Enter Date')
    } else {
      const meals = await knex('meal').where("when", ">", date)
      if (!meals.length) {
        res.status(403).json("There is not available any meal in during this date");
      } else {
        res.json(meals)
      }
    }
  }
  if ("dateBefore" in req.query) {
    const dateBefore = req.query.dateAfter;
    const date = new Date(dateBefore);
    if (!date) {
      res.status(403).json('Please Enter Date')
    } else {
      const meals = await knex('meal').where("when", "<", date)
      if (!meals.length) {
        res.status(403).json("There is not available any meal in during this date");
      } else {
        res.json(meals)
      }
    }
  }
  if ("limit" in req.query) {
    const limit = Number(req.query.limit);
    if (!limit) {
      res.status(403).json('Please Enter Limit for List of Meal')
    } else {
      const mealsLimit = await knex('meal').limit(limit)
      if (!mealsLimit.length) {
        res.status(403).json("Meal List is not available");
      } else {
        res.json(mealsLimit)
      }
    }
  }
  if ("sort_key" in req.query) {
    let mealList = knex.select("*").from("meal")
    const sortKey = req.query.sort_key;
    // @ts-ignore
    const orderBy = sortKey.toString()
    if (orderBy.length > 0) {
      if (!sortKey) {
        res.status(403).json('Please Enter Sort Key Parameter')
      } else if (sortKey === "price") {
        mealList = mealList.orderByRaw(orderBy)
        const data = await mealList
        res.json(data)
      }
      else if (sortKey === "when") {
        mealList = mealList.orderBy(orderBy)
        const data = await mealList
        res.json(data)
      }
      else if (sortKey === "max_reservations") {
        mealList = mealList.orderByRaw(orderBy)
        const data = await mealList
        res.json(data)
      }
      else {
        res.status(403).json("Enter valid Sort_key")
      }
    }
  }
  if ("sort_dir" in req.query && "sort_key" in req.query) {
    let mealList = knex.select("*").from("meal")
    const sortKey = req.query.sort_key;
    const sortDir1 = req.query.sort_dir;
    // @ts-ignore
    const orderBy = sortKey.toString();
    // @ts-ignore
    const sortDir = sortDir1.toString()

    if (orderBy.length > 0) {
      if (!sortKey && !sortDir) {
        res.status(403).json('Please Enter Sort Key Parameter')
      } else if (sortKey === "price" && sortDir === "desc") {
        mealList = mealList.orderByRaw(`${orderBy} DESC`)
        const data = await mealList
        res.json(data)
      }
      else if (sortKey === "when" && sortDir === "desc") {
        mealList = mealList.orderBy(orderBy, 'desc')
        const data = await mealList
        res.json(data)
      }
      else if (sortKey === "max_reservations" && sortDir === "desc") {
        mealList = mealList.orderByRaw(`${orderBy} DESC`)
        const data = await mealList
        res.json(data)
      }
      else {
        res.status(403).json("Enter valid Sort_key")
      }
    }
  }
});

module.exports = router;

