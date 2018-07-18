import React from 'react'

export default class Bahagiantop extends React.Component {

  render() {
    return (
      <div>

      <div id='bekas-social-network'>

        <div id='social-network' >
        <div id='social-icon-1'>
          <a href="https://www.facebook.com/maker.pen">
            <img src={require('../img/fb.png')} width={23}/>
          </a>
        </div>

        <div id='social-icon-2'>
         <a href="https://www.youtube.com/channel/UCPL_g3p4iXcBRrvgFsRjh3Q?view_as=subscriber">
          <img src={require('../img/utube-icon.png')} width={26}/>
         </a>
        </div>

        <div id='social-icon-3'>
         <a href="https://plus.google.com/116196373374106366382">
          <img src={require('../img/gp-icon.png')} width={23}/>
         </a>
        </div>

        <div id='social-icon-4'>
         <a href="https://www.behance.net/ariefuitmpd037">
          <img src={require('../img/behance.png')} width={23}/>
         </a>
        </div>

        <div id='social-icon-5'>
          <a href="https://www.instagram.com/jalanjom/">
            <img src={require('../img/insta-icon.png')} width={23}/>
          </a>
        </div>
        </div>

      <div id='susunan-nohandphone' >

        <div id='gambar-email'>
          <img src={require('../img/email1.png')} width={22} height={15}/>
        </div>

        <div id='one' className='font8'>{this.props.email}</div>

        <img src={require('../img/call.png')} width={20} height={20}/>

        <div id='two' className='font8'>{this.props.nohandphone}</div>
      </div>

      </div>


      </div>
    )
  }
}
