import React from 'react'

export default class About extends React.Component {

  render() {
    return (
      <div>

         <div data-role="popup" id="myAbout" className="ui-content">

          <div id='about_logo'>
           <img src={require('../img/logotravel1.png')} width={270}/>
          </div>

          <div id='table-about'>
            <div id='tengah' className='font7'>
             <p>ABOUT #JALAN-JOM</p>
            </div>
            <p>Menikmati keindahan alam semulajadi yang pastinya mempersona dan memukau pandangan anda. Pepohon, bunga dan alam semulajadi membentuk rupa alam yang tidak terbanding indahnya memberikan anda ketenangan dan kedamaian hati, jiwa dan minda...</p>
            <p>Kesejukan dan kesegaran suasana alam...air terjun yang mengalir tanpa henti memukau telinga dengan irama percikan air yang mendendangkan irama yang merdu..</p>
            <p>Pemandangan alam semulajadi yang sungguh menakjubkan dengan pelbagai warna yang sungguh mempersonakan. Cukup sempurna...</p>
            <p>Sinaran mentari yang datang dan pergi membawa seribu rahmat. Tatkala ia muncul... memberikan cahaya untuk kehidupan. Memulakan langkah kehidupan yang terhenti... sehinggalah ia menghilang untuk mematikan seketika langkah kehidupan ini sebelum ia muncul kembali.</p>
            <p>Keindahan Alam ini adalah kurniaan Ilahi untuk kita nikmati... Bersyukur dengan nikmat yang di beri. Segalanya juga adalah pinjaman semata-mata...Ianya bukan milik kita tapi amanah buat kita menjaganya.</p>
            <p>Sesungguhnya Allah jua lah yang berkuasa menciptakan segala keindahan ini dan dia lah jua yang akan menghancurkannya suatu hari nanti... Percayalah akan kekuasaan Nya... Bertasbihlah memuji Ilahi sambil menikmati keindahan alam ciptaan Ilahi...sebagai tanda syukur atas nikmat yang di beri dan tanda keagungan dan kekuasaanNya... Subhanallah.. Alhamdulilah... Lailahaillallah.. AllahuAkbar..</p>
           </div>
          </div>

      </div>
    )
  }
}
