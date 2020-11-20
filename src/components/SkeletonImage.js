import React, { useMemo, useState } from 'react'
import SkeletonWrapper from '../util/SkeletonWrapper'

const SkeletonImage = ({ children, src, width, height, alt, ...props }) => {
  const { showWhen, hideWhen } = props
  const [loadedImage, setLoadedImage] = useState(false)

  const reveal = useMemo(() => {
    if (showWhen === true && !hideWhen) {
      return true
    }
    if (hideWhen === true && !showWhen) {
      return false
    }
    if (showWhen !== undefined) {
      return false
    }
    if (hideWhen !== undefined) {
      return true
    }
    return loadedImage
  }, [children, hideWhen, showWhen, loadedImage])

  return (
    <SkeletonWrapper speed={props.speed}>
      <span
        style={{ display: 'inline-block' }}
        className={`${!reveal ? 'skeleton-ui-loader' : ''}`}
      >
        <img
          src={src}
          height={height}
          width={width}
          alt={alt}
          style={{ opacity: reveal ? 1 : 0, ...props.style }}
          onLoad={(e) => {
            setLoadedImage(true)
          }}
        />
      </span>
    </SkeletonWrapper>
  )
}

SkeletonImage.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3, // Speed of animation
  width: 100, // Width in pixels
  height: 100, // Width in pixels
  alt: '',
  src: '',
  style: {}
}

export default SkeletonImage
