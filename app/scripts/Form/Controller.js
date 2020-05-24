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
    let state = eval(`this.model.${e.target.id}`);
    console.log(eval(state));
    console.log(this.model.firstName);

    if (state.regex.test(e.target.value)) {
      state = {
        value: e.target.value,
        valid: true,
        regex: state.regex,
      };
      this.isValid += 1;
      if (e.target.classList.contains('checkout-input--invalid')) {
        this.view.removeRedBorder(e);
      }
    } else {
      this.view.renderErrorMessage(e);
      this.view.addRedBorder(e);
    }
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
