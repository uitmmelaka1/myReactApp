import React from 'react'
const states       = require('./daerah.json')
const melakastate  = require('./kgMelaka.json')
const wilayahstate = require('./kgWilayah.json')

export default class Booking extends React.Component {

  constructor() {
    super()
    this.state={
      select: ''
    }
  }

  mapping(array) {
    return array.map((val, i) => {
      return <option key={i}>{val}</option>
    })
  }

  option() {
    const select = this.state.select
    switch(select) {
      case 'Kelantan':
        return this.mapping(states.Kelantan)
      case 'Terengganu':
        return this.mapping(states.Terengganu)
      case 'Johor':
        return this.mapping(states.Johor)
      case 'Pahang':
        return this.mapping(states.Pahang)
      case 'Perlis':
        return this.mapping(states.Perlis)
      case 'Perak':
        return this.mapping(states.Perak)
      case 'Kedah':
        return this.mapping(states.Kedah)
      case 'Melaka':
        return this.mapping(states.Melaka)
      case 'Negeri_Sembilan':
        return this.mapping(states.Negeri_Sembilan)
      case 'Penang':
        return this.mapping(states.Penang)
      case 'Sabah':
        return this.mapping(states.Sabah)
      case 'Selangor':
        return this.mapping(states.Selangor)
      case 'Wilayah':
        return this.mapping(states.Wilayah)
      case 'Sarawak':
        return this.mapping(states.Sarawak)
    }
  }

  selectArea(){
    const area = this.option
    switch(area){
      case 'Jasin':
        return this.mapping(melakastate.Jasin)
      case 'AlorGajah':
        return this.mapping(melakastate.AlorAlorGajah)
      case 'MelakaTengah':
        return this.mapping(melakastate.MelakaTengah)
      case 'KualaLumpur':
        return this.mapping(wilayahstate.KualaLumpur)
      case 'Putrajaya':
        return this.mapping(wilayahstate.KualaLumpur)
    }
  }

  selectState() {
    const s = Object.keys(states)
    return s.map((val, i) => {
      return <option key={i}>{val}</option>
    })
  }

  render() {
    return (
      <div>

        <div id="susunan-booking">
          <div id='kotak-di-country'></div>
          <div id='kotak-di-state'></div>
          <div id='kotak-di-pin'></div>
          <div id='kotak-di-run'></div>

          <div id='gambar-orang'>
           <img src={require('../img/family.png')} width={450}/>
          </div>

          <div className="vl"></div>

          <div id='bekas-tempat-letak-kosong'>

            <div id='tajuk-booking'>
              <div className='font12'>Suggestion</div>
            </div>

            <div id='isi-booking'>
              <div className='font11'>Place your suggestion below and let other people see your suggestion</div>
            </div>

            <div id='kotak-booking1'>
              <div id='country'>
                <div className='bekas-username'>
                <div className='font10'> State:</div>
                  <select onChange={value => this.setState({select: value.target.value})}>
                    <option> -- </option>
                    {this.selectState()}
                  </select>
                </div>
              </div>
            </div>

            <div id='kotak-booking2'>
            <div id='country'>
              <div className='bekas-username'>
              <div className='font10'> district:</div>
              <select>
                <option> -- </option>
                {this.option()}
              </select>
              </div>
            </div>
            </div>

            <div id='kotak-booking2a'>
            <div id='country'>
              <div className='bekas-username'>
              <div className='font10'> Place (Specific):</div>
                <select name="placesini" id="placesini">

                </select>
              </div>
            </div>
            </div>

            <div id='kotak-booking2b'>
            <div id='country'>
              <div className='bekas-username'>
              <div className='font10'> Type of Activity:</div>
                <select name="activitysini" id="activitysini">
                  <option value=""> -- </option>
                  <option value="Food Hunter"> Food Hunter </option>
                  <option value="Jungle Activities"> Jungle Activities </option>
                  <option value="Relaxing Beach"> Relaxing Beach </option>
                  <option value="Time to Shooping"> Time to Shooping </option>
                </select>
              </div>
            </div>
            </div>

            <div id='kotak-booking3'>
              <div id='kotak-textfield'>
                <div className='bekas-username'>
                <div className='font10'> Your message:</div>
                  <textarea placeholder='Suggestion'/>
                </div>
              </div>
            </div>

            <div id='kotak-booking4'>
              <div id='kotak-button'>
                <button type="button"> <div className='font10'> Suggestion </div> </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
