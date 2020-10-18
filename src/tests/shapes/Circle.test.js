import React from 'react'
import { shallow, mount } from '../../enzyme'

import { SkeletonCircle } from '../../index'

describe('SkeletonCircle', () => {
  it('show render a ui component', () => {
    const shape = shallow(<SkeletonCircle />)
    expect(shape.find('.skeleton-ui-circle').exists()).toBe(true)
    expect(shape.find('.skeleton-ui-loader').exists()).toBe(true)
  })

  it('show render a ui component with width 200', () => {
    const shape = mount(<SkeletonCircle radius={100} />)
    const shapeStyle = shape.find('.skeleton-ui-circle-container').get(0).props
      .style
    expect(shapeStyle).toHaveProperty('maxWidth', 200)
  })
})
