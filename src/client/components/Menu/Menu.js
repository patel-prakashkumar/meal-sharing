import React, {useState, useEffect} from "react";

import "./Menu.css";

export default function Menu() {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = () => {
      setIsLoading(true);
      fetch('/api/meals')
          .then(res => res.json())
          .then(meals => setMeal(meals))
          .then(() => {
              setIsLoading(false)
          })
  }
  console.log(fetchMeals)
  useEffect(() => {
      fetchMeals();
  }, [])

  const ListOfMeals = meal.map(item => {
      return (
          <div className='wrapper-menu'>
              <h4 key={item.id}>{item.title}</h4>
              <p>Meal No: {item.id}</p>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
          </div>
      )
  })

  return (

          <div>
              {isLoading && <p>Loading...</p>}
              {meal.length === 0 ? <p>There is no meal available</p> :
              <div className="menu2">{ ListOfMeals }</div> 
              }
          </div>
          
      
  )
}