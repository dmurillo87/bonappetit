import React, { Component } from 'react'
import { getFunName } from '../utils/helpers'

export default class StorePicker extends Component {
  goToStore() {
    console.log('Valor', this.storeInput)
    // console.log('Valor', this.storeInput.value)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* ejemplo de comentario */}
        <h2>Ingrese Una Tienda</h2>
        <input
          type="text"
          required
          placeholder="Nombre de la Tienda"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input
          }}
        />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}
