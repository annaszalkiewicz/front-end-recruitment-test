/* eslint-disable max-len */
/**
 * Class representing Model in MC design pattern
 */
class Model {
  /**
   * @constructor
   * @param {object} firstName
   * @param {object} lastName
   * @param {object} email
   * @param {object} postalCode
   * @param {object} phoneNumber
   * @param {object} creditCardNumber
   * @param {object} expDate
   */
  constructor() {
    this.firstName = {
      value: '',
      valid: false,
      minLength: 3,
    };
    this.lastName = {
      value: '',
      valid: false,
      minLength: 3,
    };
    this.email = {
      value: '',
      valid: false,
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
    this.postalCode = {
      value: '',
      valid: false,
      length: 5,
    };
    this.phoneNumber = {
      value: '',
      valid: false,
      regex: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{2}(-|\s)\d{2}$/,
    };
    this.creditCardNumber = {
      value: '',
      valid: false,
      regex: /^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/,
    };
    this.securityCode = {
      value: null,
      valid: false,
      regex: /^[0-9]{3,4}$/,
    };
    this.expDate = {
      value: '',
      valid: false,
      regex: /^((0[1-9])|(1[0-2]))[\/\.\-]*((1[5-9])|(2[0-9]))$/,
    };
    /**
     * Bind this to methods
     */
    this.setModelInitialState = this.setModelInitialState.bind(this);
  }
  /**
   * Reset model values
   */
  setModelInitialState() {
    this.firstName = {
      value: '',
      valid: false,
      minLength: 3,
    };
    this.lastName = {
      value: '',
      valid: false,
      minLength: 3,
    };
    this.email = {
      value: '',
      valid: false,
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
    this.postalCode = {
      value: '',
      valid: false,
      length: 5,
    };
    this.phoneNumber = {
      value: '',
      valid: false,
      regex: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{2}(-|\s)\d{2}$/,
    };
    this.creditCardNumber = {
      value: '',
      valid: false,
      regex: /^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/,
    };
    this.securityCode = {
      value: null,
      valid: false,
      regex: /^[0-9]{3,4}$/,
    };
    this.expDate = {
      value: '',
      valid: false,
      regex: /^((0[1-9])|(1[0-2]))[\/\.\-]*((1[5-9])|(2[0-9]))$/,
    };
  }
}

export default Model;
