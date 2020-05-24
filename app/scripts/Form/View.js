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
    this.firstName = document.getElementById('first-name');
    this.lastName = document.getElementById('last-name');
    this.email = document.getElementById('email');
    this.postalCode = document.getElementById('postal-code');
    this.phone = document.getElementById('phone');
    this.cardNumber = document.getElementById('card-number');
    this.securityCode = document.getElementById('security-code');
    this.expDate = document.getElementById('exp-date');
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
      p.innerHTML = 'Your name must be min. 3 charakters.';
      break;
    case this.lastName:
      p.innerHTML = 'Your last name must be min. 3 charakters.';
      break;
    case this.email:
      p.innerHTML = 'Please input valid email address.';
      break;
    case this.postalCode:
      p.innerHTML = 'Postal code must consists of 5 digits.';
      break;
    case this.phone:
      p.innerHTML = 'Please input alid telephone number.';
      break;
    case this.cardNumber:
      p.innerHTML = 'Please input valid credit card details';
      break;
    case this.securityCode:
      p.innerHTML = 'Please input valid security code';
      break;
    case this.expDate:
      p.innerHTML = 'Expiration date is invalid';
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
