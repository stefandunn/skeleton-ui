import React from 'react'
import SkeletonStyle from '../util/SkeletonStyle'
import SkeletonWrapper from '../util/SkeletonWrapper'
import UseReveal from '../hooks/useReveal'

const SkeletonRectangle = ({ inheritClass, children, ...props }) => {
  const reveal = UseReveal({ children, props })

  return (
    <SkeletonWrapper speed={props.speed}>
      {reveal ? (
        <>{children}</>
      ) : (
        <div
          className={`${inheritClass} skeleton-ui-rectangle skeleton-ui-loader`.trim()}
          style={props.style}
        />
      )}
      <SkeletonStyle
        componentName='rectangle'
        css={`
          .skeleton-ui-rectangle {
            height: 1rem;
            background-color: #fefefe;
          }
        `}
      />
    </SkeletonWrapper>
  )
}

SkeletonRectangle.defaultProps = {
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  style: {}
}

export default SkeletonRectangle
