import { PrinterImage } from '../../src';

describe('proccess images to printing format', () => {
  it('load image from buffer', () => {
    const image = new PrinterImage('resources/sample.png');
    expect(image.width).toBe(180);
  });

  it('allow image cache', () => {
    const cache = new PrinterImage('resources/sample.png');
    const image = new PrinterImage();
    Object.assign(image, cache);
    expect(image.width).toBe(180);
  });
});
