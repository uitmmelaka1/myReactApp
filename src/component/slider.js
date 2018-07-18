import React from 'react'

export default class Slider extends React.Component {

  render() {
    return (
      <div id="slideshow">
         <div>
           <img src={require('../img/agencies.jpg')} width={1670} height={900}/>
         </div>
         <div>
           <img src={require('../img/nike.jpg')} width={1670} height={900}/>
         </div>
         <div>
           <img src={require('../img/genting.jpg')} width={1670} height={900}/>
         </div>
         <div>
           <img src={require('../img/travel1.jpg')} width={1670} height={900}/>
         </div>
      </div>
    )
  }
}
