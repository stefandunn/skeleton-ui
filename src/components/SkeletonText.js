import React from 'react'
import SkeletonRectangle from '../shapes/SkeletonRectangle'
import SkeletonWrapper from '../util/SkeletonWrapper'
import UseReveal from '../hooks/useReveal'

const SkeletonText = ({ children, ...props }) => {
  const reveal = UseReveal({ children, props })

  return (
    <SkeletonWrapper speed={props.speed}>
      {reveal ? (
        <>{children}</>
      ) : (
        <div
          className={`${props.inheritClass} skeleton-ui-text ${props.className}`}
        >
          <SkeletonRectangle
            inheritClass={props.inheritClass}
            style={{ ...props.style, width: props.width }}
          />
        </div>
      )}
    </SkeletonWrapper>
  )
}

SkeletonText.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  width: '100%', // Width in pixels
  style: {}
}

export default SkeletonText
