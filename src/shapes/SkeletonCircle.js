import React from 'react'
import SkeletonWrapper from '../util/SkeletonWrapper'
import SkeletonStyle from '../util/SkeletonStyle'
import UseReveal from '../hooks/useReveal'

const SkeletonCircle = ({ inheritClass, children, ...props }) => {
  const reveal = UseReveal({ children, props })

  return (
    <SkeletonWrapper speed={props.speed}>
      {reveal ? (
        <>{children}</>
      ) : (
        <div
          className={`${inheritClass} skeleton-ui-circle-container`}
          style={{ maxWidth: props.radius * 2 }}
        >
          <div
            className={`${inheritClass} skeleton-ui-circle skeleton-ui-loader`.trim()}
            style={{ ...props.style }}
          />
        </div>
      )}
      <SkeletonStyle
        componentName='circle'
        css={`
          .skeleton-ui-circle {
            position: relative;
            display: inline-block;
            width: 100%;
            height: 0;
            padding: 50% 0;
            border-radius: 50%;
          }
        `}
      />
    </SkeletonWrapper>
  )
}

SkeletonCircle.defaultProps = {
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  style: {},
  radius: 100
}

export default SkeletonCircle
