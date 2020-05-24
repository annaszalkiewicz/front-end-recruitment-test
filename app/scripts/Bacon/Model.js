/**
 * Class representing Model in MVC design pattern
 */
class Model {
  /**
   * @constructor
   * @param {number} width - min = 100; max = 300
   * @param {number} height - min = 50; max = 150
   * @param {url} image
   */
  constructor(
    width = Math.floor(Math.random() * 400) + 200,
    height = Math.floor(Math.random() * 200) + 100,
    image = '../../images/bacon600.jpg'
  ) {
    this.width = width;
    this.height = height;
    this.image = image;
  }
}

export default Model;
