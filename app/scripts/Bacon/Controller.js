/**
 * Class representing Controller in MVC design pattern
 * Connects model and view
 */
class Controller {
  /**
   * @constructor
   * @param {object} model
   * @param {object} view
   * @param {array} clones
   * @param {HTMLElement} container
   * @param {function} init
   * @param {function} clone
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.container = document.getElementById('image-container');
    this.clone = this.clone.bind(this);
    document.getElementById('btn-bacon').addEventListener('click', this.clone);
  }
  /**
   * Method that render clone image and display it
   */
  clone() {
    this.view.render();
  }
}

export default Controller;
