import React from 'react'
import StateComponent from './state'
export default class Maps extends React.Component {
  constructor() {
    super()
    this.state={
      states: ['Kelantan', 'Terengganu', 'Johor', 'Pahang', 'Perak', 'Selangor',
       'Negeri Sembilan', 'Melaka', 'Kedah', 'Perlis', 'Sabah', 'Sarawak', 'Penang']
    }
  }

  mapping() {
    const states = this.state.states
    return states.map((val, i) => {
      return <StateComponent key={i} value={val}/>
    })
  }

  render() {
    return (
      <div id="map">
        {this.mapping()}
        <div id='tajuk' className='font12 locationName'></div>

        <div id='maptext' className='font12'> Suggestion Location </div>
      </div>
    )
  }
}
