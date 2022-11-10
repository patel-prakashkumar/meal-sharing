import React, {useState, useEffect} from "react";
import "./Review.css";

export default function Reservation() {
  const [reviewMeal, setReviewMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = () => {
      setIsLoading(true);
      fetch('/api/reviews')
          .then(res => res.json())
          .then(meals => setReviewMeal(meals))
          .then(() => {
              setIsLoading(false)
          })
  }
  console.log(fetchMeals)
  useEffect(() => {
      fetchMeals();
  }, [])

  const ListOfMeals =reviewMeal.map(item => {
      return (
          <div className="wrapper-review">
              <h4 key={item.id}>{item.title}</h4>
              <p>Meal No: {item.id}</p>
              <p>{item.description}</p>     
              <p>{item.stars}</p>
         </div>
      )
  })

  return (
      <>   
      <div>
             {isLoading && <p>Loading...</p>}
              {reviewMeal.length === 0 ? <p>There is no meal available</p> :
              <div className="review">{ ListOfMeals }</div> 
              }
          </div>
          
      </>
  )
}