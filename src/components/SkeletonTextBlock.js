import React from 'react'
import SkeletonWrapper from '../util/SkeletonWrapper'
import SkeletonParagraph from './SkeletonParagraph'

const SkeletonTextBlock = ({ children, hideWhen, ...props }) => {
  const renderParagraphs = () => {
    const paragraphs = []
    for (let i = 0; i < props.paragraphs; i++) {
      paragraphs.push(<SkeletonParagraph key={i} {...props} className='mb-4' />)
    }

    return paragraphs
  }

  return (
    <SkeletonWrapper speed={props.speed}>
      {children || hideWhen ? (
        <>{children}</>
      ) : (
        <div
          className={`${props.inheritClass} skeleton-ui-paragraphs ${props.className}`}
        >
          {renderParagraphs()}
        </div>
      )}
    </SkeletonWrapper>
  )
}

SkeletonTextBlock.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  width: '100%', // Width in pixels
  paragraphs: 3, // Number of paragraphs
  linesPerParagraph: 3, // Lines per paragraph
  style: {}
}

export default SkeletonTextBlock
