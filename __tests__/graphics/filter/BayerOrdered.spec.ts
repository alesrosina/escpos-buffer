import { load } from '../../helper'
import { BayerOrdered, PrinterImage } from '../../../src'

describe('proccess images using Bayer ordered algorithm', () => {
  it('apply filter on image from buffer', () => {
    const image = new PrinterImage('resources/sample.png', new BayerOrdered())
    expect(image.data).toStrictEqual(load('bayer_filter', image.data))
  })
})
