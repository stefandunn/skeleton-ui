import React from 'react'
import { shallow } from '../../enzyme'

import { SkeletonImageParagraph } from '../../index'

describe('SkeletonImageParagraph', () => {
  it('show render ui component', () => {
    const component = shallow(<SkeletonImageParagraph />)
    expect(component.find('.skeleton-ui-multi-block').exists()).toBe(true)
    expect(component.children().length).toBe(2)
  })
  it('show render ui component with content', () => {
    const component = shallow(
      <SkeletonImageParagraph>
        <p>Hello World!</p>
      </SkeletonImageParagraph>
    )
    expect(component.find('p').exists()).toBe(true)
  })
})
