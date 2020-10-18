import React from 'react'
import { shallow, mount } from '../../enzyme'

import { SkeletonParagraph } from '../../index'

describe('SkeletonParagraph', () => {
  it('show render ui component', () => {
    const component = shallow(<SkeletonParagraph />)
    expect(component.find('.skeleton-ui-paragraph').exists()).toBe(true)
    expect(component.find('.skeleton-ui-paragraph').children().length).toBe(3)
  })
  it('show render ui component with 5 lines', () => {
    const component = shallow(<SkeletonParagraph linesPerParagraph={5} />)
    expect(component.find('.skeleton-ui-paragraph').exists()).toBe(true)
    expect(component.find('.skeleton-ui-paragraph').children().length).toBe(5)
  })
  it('show render ui component with content', () => {
    const component = shallow(
      <SkeletonParagraph>
        <p>Hello World!</p>
      </SkeletonParagraph>
    )
    expect(component.find('p').exists()).toBe(true)
  })
  it('show render ui component without content using hideWhen', () => {
    const component = shallow(<SkeletonParagraph hideWhen={true} />)
    expect(component.find('.skeleton-ui-paragraph').exists()).toBe(false)
    expect(component.children().length).toBe(0)
  })
  it('show render ui component with width of 50%', () => {
    const component = mount(<SkeletonParagraph width='50%' />)
    const componentStyle = component
      .find('.skeleton-ui-paragraph')
      .childAt(0)
      .get(0).props.style
    expect(componentStyle).toHaveProperty('width', '50%')
  })
})
