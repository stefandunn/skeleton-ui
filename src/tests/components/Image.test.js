import React from 'react'
import { mount } from '../../enzyme'

import { SkeletonImage } from '../../index'

describe('SkeletonImage', () => {
  it('show render ui component', () => {
    const component = mount(<SkeletonImage />)
    expect(component.find('img').exists()).toBe(true)
  })

  it('show render ui component with width 200px', () => {
    const component = mount(<SkeletonImage width={200} />)
    expect(component.get(0).props.width).toBe(200)
  })

  it('show render ui component with src and alt', () => {
    const component = mount(
      <SkeletonImage src='/example/image.png' alt='Example image' />
    )
    expect(component.find('img').get(0).props.alt).toBe('Example image')
    expect(component.find('img').get(0).props.src).toBe('/example/image.png')
  })
})
