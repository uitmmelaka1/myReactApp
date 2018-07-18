import React from 'react'
import About from './about'
import Navigation from './navigation'
import Sticky from './stickybutton'
import Top from './top'
import Login from './login'
import Register from './register'
import Slider from './slider'
import Bahagiantop from './bahagiantop'
import Bahagianbottom from './bahagianbottom'
import Menubox from './menu'
import Booking from './booking'
import Responsible from './responsible'
import PilihanMenu from './pilihanmenu.js'
import Maps from './map.js'
import Feeding from './feeding.js'

export default class Index extends React.Component {
  constructor() {
    super()
    this.state={
      name: 'Irsyad Mhd Ilham',
      age: 29,
      Tajuk: 'JalanJom',
      Promotions:'Promotions',
      Halal:'Halal',
      News_Alert:'News',
      Company_News:'Company',
      Store_Locator:'Register',
      Contact_Us:'Login',
      McDelivery:'About',
      about: true,
      email: ' suggestion.jalanjom@gmail.com ',
      nohandphone: ['+6010-9444518','/+6013-3417728','/03-45678923'],
      moreInfo:' More Information '
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentDidUpdate(props, state) {
    console.log('component did update')
    console.log(state.name)
  }

  changeName() {
    this.setState({about: false})
  }


  renderAbout() {
  if (this.state.about) {
    return <About name={this.state.name}  />
  }
}

  renderSticky() {return <Sticky />}

  renderBottom() {return <Bahagianbottom />}

  renderTop() {return <Top />}

  renderLogin() {return <Login />}

  renderRegister() {return <Register />}

  renderSlider() {return <Slider />}

  renderAbout() {return <About />}

  renderMenubox() {return <Menubox />}

  renderBooking() {return <Booking />}

  renderResponsible() {return <Responsible />}

  renderPilihanMenu() {return <PilihanMenu />}

  renderMaps() {return <Maps />}

  renderFeeding(){return <Feeding />}

  renderNavigation() {
  if (this.state.about) {
    return <Navigation
    name={this.state.name}
    Promotions={this.state.Promotions}
    Halal={this.state.Halal}
    News_Alert={this.state.News_Alert}
    Company_News={this.state.Company_News }
    Store_Locator={this.state.Store_Locator}
    Contact_Us={this.state.Contact_Us}
    McDelivery={this.state.McDelivery}
    />
  }
}

  renderBahagiantop(){
  if (this.state.about) {
    return <Bahagiantop
    email={this.state.email}
    nohandphone={this.state.nohandphone}
    />
}
}


render() {
   return (
     <div id="index">
     <div id='flag-top'> </div>


        <div id="bekas">
        {this.renderTop()}

          <div id="bahagiantop"> {this.renderBahagiantop()} </div>

          <div id="bahagian1"> {this.renderNavigation()} {this.renderSlider()} </div>

          <div id="bahagian5"> {this.renderMenubox()} </div>

          <div id="bahagian6">  {this.renderBooking()} </div>

          <div id="bahagianKomen"> {this.renderFeeding()} </div>

          <div id="bahagianmap"> {this.renderMaps()} </div>

          <div id="bahagianpejabat">  {this.renderResponsible()} </div>

          <div id="pilihanmenu"> {this.renderPilihanMenu()} </div>

          <div id="Bahagianbottom"> {this.renderBottom() } </div>

          <div id="bahagian-Login-form"> {this.renderLogin()} </div>

          <div id="bahagian-Register-form"> {this.renderRegister()} </div>

          <div id="bahagian-About-form"> {this.renderAbout()} </div>

        </div>
     </div>
   )
 }
}
