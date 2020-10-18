import React from 'react'
import { shallow, mount } from '../../enzyme'

import {
  SkeletonMultiBlocks,
  SkeletonParagraph,
  SkeletonImageParagraph
} from '../../index'

describe('SkeletonMultiBlocks', () => {
  it('show render ui component', () => {
    const component = shallow(<SkeletonMultiBlocks />)
    expect(component.find('.skeleton-ui-multi-blocks').exists()).toBe(true)
    expect(component.find(SkeletonImageParagraph).length).toBe(3)
  })
  it('show render ui component with content', () => {
    const component = shallow(
      <SkeletonMultiBlocks>
        <p>Hello World!</p>
        <p>Hello World!</p>
        <p>Hello World!</p>
      </SkeletonMultiBlocks>
    )
    expect(component.find('p').length).toBe(3)
  })

  it('show render ui component with more paragraphs', () => {
    const component = mount(<SkeletonMultiBlocks blocks={5} />)
    expect(component.find(SkeletonImageParagraph).length).toBe(5)
  })

  it('show render ui component without images', () => {
    const component = mount(<SkeletonMultiBlocks noImages={true} />)
    expect(component.find(SkeletonParagraph).length).toBe(3)
  })
})
