/**
 * Class representing Model in MVC design pattern
 */
class Model {
  /**
   * @constructor
   * @param {number} width - min = 100; max = 300
   * @param {number} height - min = 50; max = 150
   * @param {url} image300
   */
  constructor(
    width = Math.floor(Math.random() * 300) + 100,
    height = Math.floor(Math.random() * 150) + 50,
    image300 = '../../images/bacon300.jpg'
  ) {
    this.width = width;
    this.height = height;
    this.image300 = image300;
  }
}

export default Model;
