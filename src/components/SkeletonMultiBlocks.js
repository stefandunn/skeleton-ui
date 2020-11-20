import React from 'react'
import SkeletonStyle from '../util/SkeletonStyle'
import SkeletonWrapper from '../util/SkeletonWrapper'
import SkeletonImageParagraph from './SkeletonImageParagraph'
import SkeletonParagraph from './SkeletonParagraph'
import UseReveal from '../hooks/useReveal'

const SkeletonMultiBlocks = ({ children, noImages, ...props }) => {
  const reveal = UseReveal({ children, props })

  const renderMultiBlock = () => {
    const blocks = []
    for (let i = 0; i < props.blocks; i++) {
      if (!noImages) {
        blocks.push(<SkeletonImageParagraph key={i} index={i} {...props} />)
      } else {
        blocks.push(
          <SkeletonParagraph
            containerStyle={{ marginBottom: i < props.blocks ? 20 : 0 }}
            key={i}
            index={i}
            {...props}
          />
        )
      }
    }

    return blocks
  }

  return (
    <SkeletonWrapper speed={props.speed}>
      {reveal ? (
        <>{children}</>
      ) : (
        <div
          className={`${props.inheritClass} skeleton-ui-multi-blocks ${props.className}`}
        >
          {renderMultiBlock()}
        </div>
      )}
      <SkeletonStyle
        componentName='multi-blocks'
        css={`
          .skeleton-ui-multi-blocks > .skeleton-ui-multi-block {
            margin-bottom: 10px;
          }
        `}
      />
    </SkeletonWrapper>
  )
}

SkeletonMultiBlocks.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  width: '100%', // Width in pixels
  blocks: 3, // Number of blocks
  linesPerParagraph: 3, // Lines per paragraph
  noImages: false,
  style: {}
}

export default SkeletonMultiBlocks
