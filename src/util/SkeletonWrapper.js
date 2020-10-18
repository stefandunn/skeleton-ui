import React from 'react'
import SkeletonStyle from './SkeletonStyle'

const SkeletonWrapper = ({ speed, children }) => {
  const globalStyle = `
		@-webkit-keyframes skeleton-ui-load-gradient {
			% {
				background-position: -100vw 0;
			}
			100% {
				background-position: 100vw 0;
			}
		}
		.skeleton-ui-loader{
			-webkit-animation : skeleton-ui-load-gradient ${speed}s infinite;
			        animation : skeleton-ui-load-gradient ${speed}s infinite;
			background: -webkit-linear-gradient(left, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
			background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
			background-size: 100vw 100%;
			margin: 0;
		}
	`

  return (
    <>
      <SkeletonStyle componentName='base' css={globalStyle} />
      {children}
    </>
  )
}

SkeletonWrapper.defaultProps = {
  speed: 3
}

export default SkeletonWrapper
