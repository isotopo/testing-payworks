'use strict'
const Payworks = require('banorte-payworks')
require('co-mocha')
let controlNumber = function () {
    return ''+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
}

let payworks = new Payworks({
    mode:'AUT',
  merchant: '7652969',
  user: 'a7652969',
  password: 'a7652969',
  terminal: '07652969'
})
let data = {
  mode: 'AUT',
  amount: 189.00,
  entry_mode: 'MANUAL',
  card_number: '4111111111111111',
  card_exp: '1220',
  security_code: '123',
  control_number: controlNumber()
}
  it('should obtain a verify', function * () {
      this.params = Object.assign(data,{control_number: controlNumber()} )
    this.preAuth = yield payworks.preAuth(this.params)
    console.log('preAuth : ', this.preAuth)
    this.params = {
      reference: this.preAuth.referencia,
      control_number: this.preAuth.referencia
    }
    this.verify = yield payworks.verify(this.params)
    console.log('verify : ', this.verify)
  })
