import React from 'react'

export default class StateComponent extends React.Component {
  idRender() {
    const value = this.props.value
    if (value === 'Negeri Sembilan') {
      return 'n9'
    } else {
      const firstChar = value.charAt(0).toLowerCase(),
            restChar = value.slice(1, value.length)
      return `${firstChar}${restChar}`
    }
  }

  mouseOver() {
    const locationName = document.getElementsByClassName('locationName')[0]
    locationName.innerHTML = `: ${this.props.value}`
  }

  render() {
    return (
      <div onMouseOver={this.mouseOver.bind(this)} id={this.idRender()}>
      </div>
    )
  }
}
