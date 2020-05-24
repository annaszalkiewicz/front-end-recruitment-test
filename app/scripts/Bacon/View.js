/**
 * Class representing View in MVC design pattern;
 * Visual representing of Model
 */
class View {
  /**
   * @constructor
   * @param {class} model - Model
   * @param {HTMLElement} parent Parent element to image container
   * @param {HTMLElement} container Get image container
   * @param {function} render Bind this to render method
   */
  constructor(model) {
    this.model = model;
    this.parent = document.getElementById('overview');
    this.container = this.parent.lastElementChild;
    this.img = null;
    this.render = this.render.bind(this);
  }
  /**
   * Method that create image element
   * @param {HTMLElement} img
   */
  render() {
    const img = document.createElement('img');
    img.src = this.model.image;
    img.alt = 'Bacon';
    img.classList.add('overview-clone');
    img.setAttribute('width', this.model.width);
    img.setAttribute('height', this.model.height);
    img.setAttribute('loading', 'lazy');
    img.style.top = `${Math.random() * 90}%`;
    img.style.left = `${Math.random() * 90}%`;
    this.container.appendChild(img);
  }
}

export default View;
