import React from 'react'
import './card.css'

export default function Card() {
  const imageUrl = "assets/house.jpg"
  return (
    <div className="cardContainer">
      <div className="houseImage" style={{backgroundImage:`url("${imageUrl}")`}}>
          </div>
          <div className="info">
              <div className="rentalInfo">
                  <div className="price">
                      
                  </div>
                  <div className="name">
                      
                  </div>
                  <div className="address">
                      
                  </div>
              </div>
              <div className="houseInfo">
                  <div className="rooms">
                      
                  </div>
                  <div className="area">
                      
                  </div>
              </div>
          </div>
    </div>
  )
}
