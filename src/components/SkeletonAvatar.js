import React from 'react'
import SkeletonImage from './SkeletonImage'

const SkeletonAvatar = (props) => {
  return (
    <SkeletonImage
      width={props.radius * 2}
      height={props.radius * 2}
      {...props}
    />
  )
}

SkeletonAvatar.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  radius: 40, // radius in pixels
  style: { borderRadius: '100%', overflow: 'hidden' },
  src: '',
  alt: ''
}

export default SkeletonAvatar
