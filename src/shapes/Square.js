import React from 'react'
import SkeletonWrapper from '../util/SkeletonWrapper'
import SkeletonStyle from '../util/SkeletonStyle'

const Square = ({ inheritClass, ...props }) => (
  <SkeletonWrapper speed={props.speed}>
    <div
      className={`${inheritClass} skeleton-ui-square-container`}
      style={{ maxWidth: props.width }}
    >
      <div
        className={`${inheritClass} skeleton-ui-square skeleton-ui-loader`.trim()}
        style={{ ...props.style }}
      />
    </div>
    <SkeletonStyle
      componentName='square'
      css={`
        .skeleton-ui-square {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 0;
          padding: 50% 0;
        }
      `}
    />
  </SkeletonWrapper>
)

Square.defaultProps = {
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  style: {},
  width: 100
}

export default Square
