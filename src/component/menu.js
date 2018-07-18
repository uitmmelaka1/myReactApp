import React from 'react'

export default class Menubox extends React.Component {

  render() {
    return (
    <div id="bekas-kotak-menu">
      <div id="kotak-menu">
         <div id='kotak1'>
          <div id='makan'></div>
          <div class='text1'>
            <div class="fontmenu">Hunting Your Best Food</div>
          </div>
          <div class='text4a'>
            <div class="fontmenuisi">Western, Melayu ,Indian</div>
          </div>
          <div className='information'>
            <div className='ayat'>
             <div className='font9'> Read More-> </div>
            </div>
          </div>
         </div>
         <div id='kotak2'>
          <div id='aktiviti'></div>
          <div class='text2'>
            <div class="fontmenu">Increasing Your Adrenaline</div>
          </div>
          <div class='text4a'>
            <div class="fontmenuisi">Biking ,Hiking ,Jogging ,Fishing</div>
          </div>
          <div className='information'>
           <div className='ayat'>
            <div className='font9'> Read More-> </div>
           </div>
          </div>
         </div>
         <div id='kotak3'>
          <div id='pantai'></div>
          <div class='text3'>
            <div class="fontmenu">Relaxing Your Mind</div>
          </div>
          <div class='text4a'>
            <div class="fontmenuisi">Beach ,Diving ,Snorkling ,Boat</div>
          </div>
          <div className='information'>
           <div className='ayat'>
            <div className='font9'> Read More->
           </div>
          </div>
         </div>
         </div>
         <div id='kotak4'>
          <div id='beli'></div>
          <div class='text4'>
            <div class="fontmenu"> Finding Your Grocery </div>
          </div>
          <div class='text4a'>
            <div class="fontmenuisi">Shopping Complex ,Grocery</div>
          </div>
          <div className='information'>
            <div className='ayat'>
              <div className='font9'> Read More ->
              </div>
            </div>
           </div>
         </div>
      </div>

      <div id='view-more-plan'>
        <div id='view-more-tours'> View More Tours </div>
      </div>
    </div>
    )
  }
}
