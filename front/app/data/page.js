import React from 'react'

async function TourList() {

      const res = await fetch(`${process.env.BASE_URL}/tour`);
      let data = await res.json();
      data =  data.splice(0,10);
      return (
            <div>{data.map(tourItem => (<li key={tourItem.id}>{tourItem.destination.name}</li>))}</div>

      )
}
 
export default TourList