import React from 'react'
import SkeletonStyle from '../util/SkeletonStyle'
import SkeletonWrapper from '../util/SkeletonWrapper'

const Rectangle = ({ inheritClass, ...props }) => (
  <SkeletonWrapper speed={props.speed}>
    <div
      className={`${inheritClass} skeleton-ui-rectangle skeleton-ui-loader`.trim()}
      style={props.style}
    />
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

Rectangle.defaultProps = {
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  style: {}
}

export default Rectangle
