import React from 'react'

export default class Sticky extends React.Component {

  render() {
    return (
      <div>
        <div id='sticky'>


          <div id="logo1" className="font3" data-title="Our Recommended location" className="tooltip">
          <a href=''><img src={require('../img/compass.png')} width={58}/></a></div>

          <div id="logo2" className="font3" data-title="Our Recommended agencies" className="tooltip">
          <a href=''><img src={require('../img/agencies.png')} width={41}/></a></div>

          <div id="logo4" className="font3" data-title="Our Info" className="tooltip">
          <a href=''><img src={require('../img/info.png')} width={54}/></a></div>

          <div id="logo5" className="font3" data-title="Our Facebook" className="tooltip">
          <a href=''><img src={require('../img/fb.png')} width={40}/></a></div>

          <div id="logo6" className="font3" data-title="See Us on Instagram" className="tooltip">
          <a href=''><img src={require('../img/insta.png')} width={54}/></a></div>

          <div id="logo7" className="font3" data-title="Be Apart of Us" className="tooltip">
          <a href=''><img src={require('../img/2orang.png')} width={45}/></a></div>

          <div id="logo8" className="font3" data-title="Watch our Video on YouTube" className="tooltip">
          <a href=''><img src={require('../img/yt.png')} width={70}/></a></div>

          <div id="logo9" className="font3" data-title="Recommendation by Our friend" className="tooltip">
          <a href=''><img src={require('../img/like.png')} width={35}/></a></div>

        </div>
      </div>
    )
  }
}
