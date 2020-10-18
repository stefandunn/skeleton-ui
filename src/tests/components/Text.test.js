import React from 'react'
import { shallow, mount } from '../../enzyme'

import { SkeletonText } from '../../index'

describe('SkeletonText', () => {
  it('show render ui component', () => {
    const component = shallow(<SkeletonText />)
    expect(component.find('.skeleton-ui-text').exists()).toBe(true)
  })
  it('show render ui component with content', () => {
    const component = shallow(
      <SkeletonText>
        <p>Hello World!</p>
      </SkeletonText>
    )
    expect(component.find('p').exists()).toBe(true)
  })
  it('show render ui component without content using hideWhen', () => {
    const component = shallow(<SkeletonText hideWhen={true} />)
    expect(component.find('.skeleton-ui-text').exists()).toBe(false)
    expect(component.children().length).toBe(0)
  })
  it('show render ui component with width of 50%', () => {
    const component = mount(<SkeletonText width='50%' />)
    const componentStyle = component.find('.skeleton-ui-text').childAt(0).get(0)
      .props.style
    expect(componentStyle).toHaveProperty('width', '50%')
  })
})
