import React from 'react'
import SkeletonWrapper from '../util/SkeletonWrapper'

const SkeletonImage = ({ children, src, width, height, alt, ...props }) => (
  <SkeletonWrapper speed={props.speed}>
    <img
      src={src}
      className='skeleton-ui-loader'
      height={height}
      width={width}
      alt={alt}
      style={props.style}
    />
  </SkeletonWrapper>
)

SkeletonImage.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  width: 100, // Width in pixels
  height: 100, // Width in pixels
  alt: '',
  src: '',
  style: {}
}

export default SkeletonImage
