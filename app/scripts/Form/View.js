/**
 * Class representing View in MVC design pattern
 */
class View {
  /**
     * @param {HTMLElement} firstName
     * @param {HTMLElement} lastName
     * @param {HTMLElement} email
     * @param {HTMLElement} country
     * @param {HTMLElement} postalCode
     * @param {HTMLElement} phone
     * @param {HTMLElement} cardNumber
     * @param {HTMLElement} securityCode
     * @param {HTMLElement} expDate
     * @param {HTMLElement} button
     */
  constructor() {
    this.firstName = document.getElementById('firstName');
    this.lastName = document.getElementById('lastName');
    this.email = document.getElementById('email');
    this.postalCode = document.getElementById('postalCode');
    this.phone = document.getElementById('phone');
    this.creditCardNumber = document.getElementById('creditCardNumber');
    this.securityCode = document.getElementById('securityCode');
    this.expDate = document.getElementById('expDate');
    this.form = document.getElementById('checkout-form');
    this.button = document.getElementById('checkout-button');
    /**
     * Bind this keyword to methods
     */
    this.render = this.render.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
    this.clearErrorMessage = this.clearErrorMessage.bind(this);
    this.removeDisabled = this.removeDisabled.bind(this);
    this.removeInputsValues = this.removeInputsValues.bind(this);
    this.addRedBorder = this.addRedBorder.bind(this);
    this.removeRedBorder = this.removeRedBorder.bind(this);
  }
  /**
   * Render message if input is invalid
   * @param {object} e - event
   */
  renderErrorMessage(e) {
    const p = document.createElement('p');
    p.classList.add('checkout-message--error');
    switch (e.target) {
    case this.firstName:
      p.innerHTML = 'Your name must have min. 3 characters.';
      break;
    case this.lastName:
      p.innerHTML = 'Your last name must have min. 3 characters.';
      break;
    case this.email:
      p.innerHTML = 'Please input valid email address.';
      break;
    case this.postalCode:
      p.innerHTML = 'Postal code must consists of 5 digits only.';
      break;
    case this.phoneNumber:
      p.innerHTML = 'Please input valid telephone number.';
      break;
    case this.creditCardNumber:
      p.innerHTML = 'Please input valid credit card details.';
      break;
    case this.securityCode:
      p.innerHTML = 'Please input valid security code.';
      break;
    case this.expDate:
      p.innerHTML = 'Expiration date is invalid.';
      break;
    default:
      break;
    }
    e.target.parentElement.appendChild(p);
  }
  /**
   * Method that remove paragraph with error message from DOM
   * @param {object} e - event
   */
  clearErrorMessage(e) {
    const p = e.target.parentElement.querySelector('p');
    console.log('Deleting paragraph' + p);
    e.target.parentElement.removeChild(p);
  }
  /**
   * Add class to invalid input
   * @param {object} e - event
   */
  addRedBorder(e) {
    e.target.classList.add('checkout-input--invalid');
  }
  /**
   * Remove invalid class if input is corrected
   * @param {object} e - event
   */
  removeRedBorder(e) {
    e.target.classList.remove('checkout-input--invalid');
  }
  /**
   * @param {function} Message to display if form is valid
   */
  render() {
    const msg = document.createElement('h2');
    msg.innerHTML = 'Your form has been submitted successfully';
    this.button.parentElement.appendChild(msg);
  }
  /**
   * Method that removes disabled attribute
   */
  removeDisabled() {
    this.button.removeAttribute('disabled');
  }
  /**
   * Clear inputs values after submitting a form
   */
  removeInputsValues() {
    const inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
      input.value = '';
    }
  }
}
export default View;
