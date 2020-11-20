import React from 'react'
import SkeletonWrapper from '../util/SkeletonWrapper'
import SkeletonStyle from '../util/SkeletonStyle'
import SkeletonParagraph from './SkeletonParagraph'
import SkeletonRectangle from '../shapes/SkeletonRectangle'
import UseReveal from '../hooks/useReveal'

const SkeletonImageParagraph = ({ children, ...props }) => {
  const reveal = UseReveal({ children, props })

  return (
    <SkeletonWrapper speed={props.speed}>
      {reveal ? (
        <>{children}</>
      ) : (
        <>
          {props.index % 2 === 0 ? (
            <div
              className={`${props.inheritClass} skeleton-ui-multi-block ${props.className}`}
            >
              <SkeletonRectangle
                {...props}
                style={{
                  width: props.imageWidth,
                  height: props.imageWidth * 0.6,
                  marginRight: 5
                }}
              />
              <SkeletonParagraph {...props} width={props.lineWidth} />
            </div>
          ) : (
            <div
              className={`${props.inheritClass} skeleton-ui-multi-block ${props.className}`}
            >
              <SkeletonParagraph {...props} width={props.lineWidth} />
              <SkeletonRectangle
                {...props}
                style={{
                  width: props.imageWidth,
                  height: props.imageWidth * 0.6,
                  marginLeft: 5
                }}
              />
            </div>
          )}
        </>
      )}
      <SkeletonStyle
        componentName='multi-block'
        css={`
          .skeleton-ui-multi-block {
            display: flex;
            align-items: start;
          }

          .skeleton-ui-multi-block > .skeleton-ui-paragraph {
            flex-basis: 100%;
          }
        `}
      />
    </SkeletonWrapper>
  )
}

SkeletonImageParagraph.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  imageWidth: 100,
  lineWidth: '100%', // Width in pixels
  linesPerParagraph: 3, // Lines per paragraph
  style: {},
  index: 1
}

export default SkeletonImageParagraph
