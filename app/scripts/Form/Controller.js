/**
 * Class representing Controller in MVC design pattern
 * connects model and view
 */
class Controller {
  /**
   * @param {object} model
   * @param {object} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.isValid = 1;
    /**
     * Event listeners
     */
    this.view.form.addEventListener('change', (e) =>
      this.changeInputEventHandler(e)
    );
    this.view.button.addEventListener('click', (e) =>
      this.submitFormHandler(e)
    );
    /**
     * Bind this to methods
     */
    this.changeInputEventHandler = this.changeInputEventHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }
  /**
   * Method that handles inputs changes
   * @param {object} e
   */
  changeInputEventHandler(e) {
    // Check if error message exists. if so remove it
    if (e.target.parentElement.lastChild.nodeName === 'P') {
      this.view.clearErrorMessage(e);
    }
    switch (e.target) {
    case this.view.firstName:
      if (e.target.value.length >= this.model.firstName.minLength) {
        this.model.firstName = {
          value: e.target.value,
          valid: true,
          minLength: this.model.firstName.minLength,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
        this.view.addRedBorder(e);
      }
      break;
    case this.view.lastName:
      if (e.target.value.length >= this.model.lastName.minLength) {
        this.model.lastName = {
          value: e.target.value,
          valid: true,
          minLength: this.model.lastName.minLength,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
      }
      break;
    case this.view.email:
      if (this.model.email.regex.test(e.target.value)) {
        this.model.email = {
          value: e.target.value,
          valid: true,
          regex: this.model.email.regex,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
      }
      break;
    case this.view.postalCode:
      if (e.target.value >= this.model.postalCode.length) {
        this.model.postalCode = {
          value: e.target.value,
          valid: true,
          length: this.model.postalCode.length,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
      }
      break;
    case this.view.phone:
      if (this.model.phoneNumber.regex.test(e.target.value)) {
        this.model.phone = {
          value: e.target.value,
          valid: true,
          regex: this.model.phoneNumber.regex,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
      }
      break;
    case this.view.cardNumber:
      if (this.model.creditCardNumber.regex.test(e.target.value)) {
        this.model.creditCardNumber = {
          value: e.target.value,
          valid: true,
          regex: this.model.creditCardNumber.regex,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
      }
      break;
    case this.view.securityCode:
      if (this.model.securityCode.regex.test(e.target.value)) {
        this.model.securityCode = {
          value: e.target.value,
          valid: true,
          regex: this.model.securityCode.regex,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
      }
      break;
    case this.view.expDate:
      if (this.model.expDate.regex.test(e.target.value)) {
        this.model.expDate = {
          value: e.target.value,
          valid: true,
          regex: this.model.expDate.regex,
        };
        this.isValid += 1;
      } else {
        this.view.renderErrorMessage(e);
      }
      break;
    default:
      break;
    }
    console.log(this.isValid);
    this.validateForm();
  }
  /**
   * Method that checs if all inputs are valid
   */
  validateForm() {
    if (this.isValid === 9) {
      this.view.removeDisabled();
    }
  }
  /**
   * Method that submit form
   * @param {object} e - event
   */
  submitFormHandler(e) {
    e.preventDefault();
    try {
      this.view.render();
      this.view.removeInputsValues();
      this.model.setModelInitialState();
    } catch (error) {
      alert('There was problem to submit your form. Please try again :(');
      console.log(error);
    }
  }
}
export default Controller;
