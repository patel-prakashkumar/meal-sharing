import React, {useState, useEffect} from "react";
import "./Reservation.css";

export default function Reservation() {
  const [reservMeal, setReservMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = () => {
      setIsLoading(true);
      fetch('/api/meals')
          .then(res => res.json())
          .then(meals => setReservMeal(meals))
          .then(() => {
              setIsLoading(false)
          })
  }
  console.log(fetchMeals)
  useEffect(() => {
      fetchMeals();
  }, [])

  const ListOfMeals =reservMeal.map(item => {
      return (
          <div className="wrapper-reservation">
              <div><h4 key={item.id}>{item.title}</h4> <span className="menu-id">{item.id}</span></div>
               <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p><b>Max Reservation: </b>{item.max_reservations}</p>
             <button>Add Reservation</button>
             
          </div>
      )
  })

  return (
      <>   
      <div>
             {isLoading && <p>Loading...</p>}
              {reservMeal.length === 0 ? <p>There is no meal available</p> :
              <div className="reservation">{ ListOfMeals }</div> 
              }
          </div>
          
      </>
  )
}