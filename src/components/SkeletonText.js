import React from 'react'
import Rectangle from '../shapes/Rectangle'
import SkeletonWrapper from '../util/SkeletonWrapper'

const SkeletonText = ({ children, hideWhen, ...props }) => (
  <SkeletonWrapper speed={props.speed}>
    {children || hideWhen ? (
      <>{children}</>
    ) : (
      <div
        className={`${props.inheritClass} skeleton-ui-text ${props.className}`}
      >
        <Rectangle
          inheritClass={props.inheritClass}
          style={{ ...props.style, width: props.width }}
        />
      </div>
    )}
  </SkeletonWrapper>
)

SkeletonText.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  width: '100%', // Width in pixels
  style: {}
}

export default SkeletonText
