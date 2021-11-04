import { load } from '../../helper'
import { Threshold, PrinterImage } from '../../../src'

describe('proccess images using threshold algorithm', () => {
  it('apply filter on image from buffer', () => {
    const image = new PrinterImage(load('sample.png'), new Threshold())
    expect(image.data).toStrictEqual(load('threshold_filter', image.data))
  })
})
