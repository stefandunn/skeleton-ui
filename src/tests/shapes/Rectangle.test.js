import React from 'react'
import { shallow, mount } from '../../enzyme'

import { SkeletonRectangle } from '../../index'

describe('SkeletonRectangle', () => {
  it('show render a ui component', () => {
    const shape = shallow(<SkeletonRectangle />)
    expect(shape.find('.skeleton-ui-rectangle').exists()).toBe(true)
    expect(shape.find('.skeleton-ui-loader').exists()).toBe(true)
  })

  it('show render a ui component with width 200', () => {
    const shape = mount(<SkeletonRectangle style={{ width: 200 }} />)
    const shapeStyle = shape.get(0).props.style
    expect(shapeStyle).toHaveProperty('width', 200)
  })

  it('show render a ui component with height 200', () => {
    const shape = mount(<SkeletonRectangle style={{ height: 200 }} />)
    const shapeStyle = shape.get(0).props.style
    expect(shapeStyle).toHaveProperty('height', 200)
  })
})
