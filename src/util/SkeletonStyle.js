import React, { useEffect } from 'react'

const SkeletonStyle = ({ componentName, css }) => {
  useEffect(() => {
    const SkeletonStyles = window.SkeletonUIStyles || {}
    if (!SkeletonStyles[`skeleton-ui-${componentName}-style`]) {
      SkeletonStyles[`skeleton-ui-${componentName}-style`] = true
      const head = document.head || document.getElementsByTagName('head')[0]
      const style = document.createElement('style')

      head.appendChild(style)

      if (style.styleSheet) {
        style.styleSheet.cssText = css
      } else {
        style.appendChild(document.createTextNode(css))
      }
    }
    window.SkeletonUIStyles = SkeletonStyles
  }, [])

  return <></>
}

export default React.memo(SkeletonStyle)
