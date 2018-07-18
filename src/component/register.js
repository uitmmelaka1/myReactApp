import React from 'react'

export default class Register extends React.Component {


  render() {
    return (

      <div>
      <div data-role="popup" id="myRegister" className="ui-content">
    <form >
     <div>

       <div id='continue-icon'>
         <img src={require('../img/arrow.png')} width={20}/>
       </div>

       <div id='continue-icon1'>
         <img src={require('../img/re.png')} width={24}/>
       </div>

        <div id='username-icon1'>
         <img src={require('../img/email.png')} width={19}/>
        </div>

        <div id='password-icon1'>
        <img src={require('../img/username.png')} width={13}/>
        </div>

        <div id='address-icon1'>
        <img src={require('../img/address.png')} width={23}/>
        </div>

        <div id='last-icon1'>
        <img src={require('../img/password.png')} width={32}/>
        </div>

        <div id='gambar'>
          <img src={require('../img/login.png')} width={170}/>
        </div>

        <div id='bekas-font' className='font5'>REGISTER</div>

        <div className='font6'> Username : </div>
        <input type="text" name="user" placeholder="Username" />

        <div className='font6'> Email : </div>
        <input type="text" name="email" placeholder="Email" />

        <div className='font6'> Address : </div>
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="address1" placeholder="" />

        <div className='font6'> Password : </div>
        <input type="password" name="password" placeholder="Password" />

        <div className='font6'> Re-Type Password : </div>
        <input type="password" name="retype-password" placeholder="Re-Type Password" />

        <input type="submit" value='Submit' name='submit'/>
        <input type="reset" value='Reset' name='reset'/>

     </div>
   </form>
 </div>

      </div>

    )
  }
}
