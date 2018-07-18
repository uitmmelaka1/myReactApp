import React from 'react'

export default class Navigation extends React.Component {

  render() {
    return (
      <div id="susunan-bahagian1">
        <div id='isi-susunan-bahagian1'>
        <div id="logo" className="font3">
        <img src={require('../img/logotravel1.png')} width={80}/>
        <div id='sentence'>#JalanJom</div>
        </div>

          <div id="Promotions" className="font3">{this.props.Promotions}</div>

          <div id="Halal" className="font3">{this.props.Halal}</div>

          <div id="News_Alert" className="font3">{this.props.News_Alert}</div>

          <div id="Company_News" className="font3">{this.props.Company_News}</div>

          <div id="Store_Locator" className="font3"><a href="#myRegister" data-rel="popup" >{this.props.Store_Locator}</a></div>

          <div id="Contact_Us" className="font3"><a href="#myPopup" data-rel="popup" >{this.props.Contact_Us}</a></div>

          <div id="McDelivery" className="font3"><a href="#myAbout" data-rel="popup" >{this.props.McDelivery}</a></div>
        </div>
      </div>
    )
  }
}
