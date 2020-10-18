import React from 'react'
import { mount } from '../../enzyme'

import { SkeletonAvatar } from '../../index'

describe('SkeletonAvatar', () => {
  it('show render ui component', () => {
    const component = mount(<SkeletonAvatar />)
    expect(component.childAt(0).get(0).type.name).toBe('SkeletonImage')
  })

  it('show render ui component with width 200px', () => {
    const component = mount(<SkeletonAvatar radius={100} />)
    expect(component.childAt(0).get(0).props.width).toBe(200)
  })

  it('show render ui component with src and alt', () => {
    const component = mount(
      <SkeletonAvatar src='/example/image.png' alt='Example image' />
    )
    expect(component.childAt(0).find('img').get(0).props.alt).toBe(
      'Example image'
    )
    expect(component.childAt(0).find('img').get(0).props.src).toBe(
      '/example/image.png'
    )
  })
})
