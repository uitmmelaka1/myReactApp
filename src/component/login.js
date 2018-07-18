import React from 'react'

export default class Login extends React.Component {


  render() {
    return (
  <div>
  <div data-role="popup" id="myPopup" className="ui-content">
      <form>
       <div>

         <div id='username-icon'>
           <img src={require('../img/password.png')} width={30}/>
         </div>

         <div id='password-icon'>
           <img src={require('../img/username.png')} width={13}/>
         </div>

          <div id='gambar1'>
            <img src={require('../img/login.png')} width={170}/>
          </div>

          <div id='bekas-font1' className='font5'>LOGIN</div>

          <div className='font6'>Username : </div>
          <input type="text" name="user" placeholder="Username" />

          <div className='font6'>Password : </div>
          <input type="password" name="passw" placeholder="Password" />

          <label htmlFor="log">Remember Me</label>
          <input type="checkbox" name="login" id="log" />

          <input type="submit" value='Submit' name='submit'/>
          <input type="reset" value='Reset' name='reset'/>

       </div>
     </form>
   </div>
  </div>

    )
  }
}
