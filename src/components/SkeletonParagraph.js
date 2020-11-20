import React from 'react'
import SkeletonText from './SkeletonText'
import SkeletonWrapper from '../util/SkeletonWrapper'
import UseReveal from '../hooks/useReveal'

const SkeletonParagraph = ({ children, ...props }) => {
  const reveal = UseReveal({ children, props })

  const renderLines = () => {
    const lines = []
    for (let i = 0; i < props.linesPerParagraph; i++) {
      lines.push(
        <SkeletonText
          key={i}
          {...props}
          style={{ ...props.style, width: props.width, marginBottom: 5 }}
        />
      )
    }

    return lines
  }

  return (
    <SkeletonWrapper speed={props.speed}>
      {reveal ? (
        <>{children}</>
      ) : (
        <div
          className={`${props.inheritClass} skeleton-ui-paragraph ${props.className}`}
          style={props.containerStyle}
        >
          {renderLines()}
        </div>
      )}
    </SkeletonWrapper>
  )
}

SkeletonParagraph.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  width: '100%', // Width in pixels
  linesPerParagraph: 3, // Lines per paragraph
  style: {},
  containerStyle: {}
}

export default SkeletonParagraph
