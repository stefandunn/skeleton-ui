import React from 'react'
import { shallow, mount } from '../../enzyme'

import { SkeletonSquare } from '../../index'

describe('SkeletonSquare', () => {
  it('show render a ui component', () => {
    const shape = shallow(<SkeletonSquare />)
    expect(shape.find('.skeleton-ui-square').exists()).toBe(true)
    expect(shape.find('.skeleton-ui-loader').exists()).toBe(true)
  })

  it('show render a ui component with width 200', () => {
    const shape = mount(<SkeletonSquare width={200} />)
    const shapeStyle = shape.find('.skeleton-ui-square-container').get(0).props
      .style
    expect(shapeStyle).toHaveProperty('maxWidth', 200)
  })
})
