import React, { useEffect, useMemo } from 'react';

const SkeletonStyle = ({
  componentName,
  css
}) => {
  useEffect(() => {
    const SkeletonStyles = window.SkeletonUIStyles || {};

    if (!SkeletonStyles[`skeleton-ui-${componentName}-style`]) {
      SkeletonStyles[`skeleton-ui-${componentName}-style`] = true;
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      head.appendChild(style);

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    window.SkeletonUIStyles = SkeletonStyles;
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};

var SkeletonStyle$1 = React.memo(SkeletonStyle);

const SkeletonWrapper = ({
  speed,
  children
}) => {
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
	`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SkeletonStyle$1, {
    componentName: "base",
    css: globalStyle
  }), children);
};

SkeletonWrapper.defaultProps = {
  speed: 3
};

const SkeletonRectangle = ({
  inheritClass,
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  ...props
}) => {
  const reveal = useMemo(() => {
    if (_hideWhen === null && _showWhen === null) {
      return children.length > 0;
    }

    if (_hideWhen === null && _showWhen === true) {
      return true;
    }

    return false;
  }, [children, _hideWhen, _showWhen]);
  useEffect(() => {
    window.alert('HKIH');
  }, []);
  return /*#__PURE__*/React.createElement(SkeletonWrapper, {
    speed: props.speed
  }, reveal ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement("div", {
    className: `${inheritClass} skeleton-ui-rectangle skeleton-ui-loader`.trim(),
    style: props.style
  }), /*#__PURE__*/React.createElement(SkeletonStyle$1, {
    componentName: "rectangle",
    css: `
          .skeleton-ui-rectangle {
            height: 1rem;
            background-color: #fefefe;
          }
        `
  }));
};

SkeletonRectangle.defaultProps = {
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  style: {}
};

const SkeletonText = ({
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  ...props
}) => /*#__PURE__*/React.createElement(SkeletonWrapper, {
  speed: props.speed
}, children || _hideWhen ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement("div", {
  className: `${props.inheritClass} skeleton-ui-text ${props.className}`
}, /*#__PURE__*/React.createElement(SkeletonRectangle, {
  inheritClass: props.inheritClass,
  style: { ...props.style,
    width: props.width
  }
})));

SkeletonText.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  width: '100%',
  style: {}
};

const SkeletonParagraph = ({
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  ...props
}) => {
  const renderLines = () => {
    const lines = [];

    for (let i = 0; i < props.linesPerParagraph; i++) {
      lines.push( /*#__PURE__*/React.createElement(SkeletonText, Object.assign({
        key: i
      }, props, {
        style: { ...props.style,
          width: props.width,
          marginBottom: 5
        }
      })));
    }

    return lines;
  };

  return /*#__PURE__*/React.createElement(SkeletonWrapper, {
    speed: props.speed
  }, children || _hideWhen ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement("div", {
    className: `${props.inheritClass} skeleton-ui-paragraph ${props.className}`,
    style: props.containerStyle
  }, renderLines()));
};

SkeletonParagraph.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  width: '100%',
  linesPerParagraph: 3,
  style: {},
  containerStyle: {}
};

const SkeletonTextBlock = ({
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  ...props
}) => {
  const renderParagraphs = () => {
    const paragraphs = [];

    for (let i = 0; i < props.paragraphs; i++) {
      paragraphs.push( /*#__PURE__*/React.createElement(SkeletonParagraph, Object.assign({
        key: i
      }, props, {
        className: "mb-4"
      })));
    }

    return paragraphs;
  };

  return /*#__PURE__*/React.createElement(SkeletonWrapper, {
    speed: props.speed
  }, children || _hideWhen ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement("div", {
    className: `${props.inheritClass} skeleton-ui-paragraphs ${props.className}`
  }, renderParagraphs()));
};

SkeletonTextBlock.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  width: '100%',
  paragraphs: 3,
  linesPerParagraph: 3,
  style: {}
};

const SkeletonImage = ({
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  src,
  width,
  height,
  alt,
  ...props
}) => /*#__PURE__*/React.createElement(SkeletonWrapper, {
  speed: props.speed
}, /*#__PURE__*/React.createElement("img", {
  src: src,
  className: "skeleton-ui-loader",
  height: height,
  width: width,
  alt: alt,
  style: props.style,
  onLoad: e => {
    e.target.classList.remove('skeleton-ui-loader');
  }
}));

SkeletonImage.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  width: 100,
  height: 100,
  alt: '',
  src: '',
  style: {}
};

const SkeletonImageParagraph = ({
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(SkeletonWrapper, {
    speed: props.speed
  }, children || _hideWhen ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement(React.Fragment, null, props.index % 2 === 0 ? /*#__PURE__*/React.createElement("div", {
    className: `${props.inheritClass} skeleton-ui-multi-block ${props.className}`
  }, /*#__PURE__*/React.createElement(SkeletonRectangle, Object.assign({}, props, {
    style: {
      width: props.imageWidth,
      height: props.imageWidth * 0.6,
      marginRight: 5
    }
  })), /*#__PURE__*/React.createElement(SkeletonParagraph, Object.assign({}, props, {
    width: props.lineWidth
  }))) : /*#__PURE__*/React.createElement("div", {
    className: `${props.inheritClass} skeleton-ui-multi-block ${props.className}`
  }, /*#__PURE__*/React.createElement(SkeletonParagraph, Object.assign({}, props, {
    width: props.lineWidth
  })), /*#__PURE__*/React.createElement(SkeletonRectangle, Object.assign({}, props, {
    style: {
      width: props.imageWidth,
      height: props.imageWidth * 0.6,
      marginLeft: 5
    }
  })))), /*#__PURE__*/React.createElement(SkeletonStyle$1, {
    componentName: "multi-block",
    css: `
          .skeleton-ui-multi-block {
            display: flex;
            align-items: start;
          }

          .skeleton-ui-multi-block > .skeleton-ui-paragraph {
            flex-basis: 100%;
          }
        `
  }));
};

SkeletonImageParagraph.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  imageWidth: 100,
  lineWidth: '100%',
  linesPerParagraph: 3,
  style: {},
  index: 1
};

const SkeletonMultiBlocks = ({
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  noImages,
  ...props
}) => {
  const renderMultiBlock = () => {
    const blocks = [];

    for (let i = 0; i < props.blocks; i++) {
      if (!noImages) {
        blocks.push( /*#__PURE__*/React.createElement(SkeletonImageParagraph, Object.assign({
          key: i,
          index: i
        }, props)));
      } else {
        blocks.push( /*#__PURE__*/React.createElement(SkeletonParagraph, Object.assign({
          containerStyle: {
            marginBottom: i < props.blocks ? 20 : 0
          },
          key: i,
          index: i
        }, props)));
      }
    }

    return blocks;
  };

  return /*#__PURE__*/React.createElement(SkeletonWrapper, {
    speed: props.speed
  }, children || _hideWhen ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : /*#__PURE__*/React.createElement("div", {
    className: `${props.inheritClass} skeleton-ui-multi-blocks ${props.className}`
  }, renderMultiBlock()), /*#__PURE__*/React.createElement(SkeletonStyle$1, {
    componentName: "multi-blocks",
    css: `
          .skeleton-ui-multi-blocks > .skeleton-ui-multi-block {
            margin-bottom: 10px;
          }
        `
  }));
};

SkeletonMultiBlocks.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  width: '100%',
  blocks: 3,
  linesPerParagraph: 3,
  noImages: false,
  style: {}
};

const SkeletonAvatar = props => {
  return /*#__PURE__*/React.createElement(SkeletonImage, Object.assign({
    width: props.radius * 2,
    height: props.radius * 2
  }, props));
};

SkeletonAvatar.defaultProps = {
  hideWhen: null,
  className: '',
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  radius: 40,
  style: {
    borderRadius: '100%',
    overflow: 'hidden'
  },
  src: '',
  alt: ''
};

const SkeletonCircle = ({
  inheritClass,
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  ...props
}) => /*#__PURE__*/React.createElement(SkeletonWrapper, {
  speed: props.speed
}, /*#__PURE__*/React.createElement("div", {
  className: `${inheritClass} skeleton-ui-circle-container`,
  style: {
    maxWidth: props.radius * 2
  }
}, /*#__PURE__*/React.createElement("div", {
  className: `${inheritClass} skeleton-ui-circle skeleton-ui-loader`.trim(),
  style: { ...props.style
  }
})), /*#__PURE__*/React.createElement(SkeletonStyle$1, {
  componentName: "circle",
  css: `
        .skeleton-ui-circle {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 0;
          padding: 50% 0;
          border-radius: 50%;
        }
      `
}));

SkeletonCircle.defaultProps = {
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  style: {},
  radius: 100
};

const SkeletonSquare = ({
  inheritClass,
  children,
  hideWhen: _hideWhen = null,
  showWhen: _showWhen = null,
  ...props
}) => /*#__PURE__*/React.createElement(SkeletonWrapper, {
  speed: props.speed
}, /*#__PURE__*/React.createElement("div", {
  className: `${inheritClass} skeleton-ui-square-container`,
  style: {
    maxWidth: props.width
  }
}, /*#__PURE__*/React.createElement("div", {
  className: `${inheritClass} skeleton-ui-square skeleton-ui-loader`.trim(),
  style: { ...props.style
  }
})), /*#__PURE__*/React.createElement(SkeletonStyle$1, {
  componentName: "square",
  css: `
        .skeleton-ui-square {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 0;
          padding: 50% 0;
        }
      `
}));

SkeletonSquare.defaultProps = {
  inheritClass: 'skeleton-ui-component',
  speed: 3,
  style: {},
  width: 100
};

export { SkeletonAvatar, SkeletonCircle, SkeletonImage, SkeletonImageParagraph, SkeletonMultiBlocks, SkeletonParagraph, SkeletonRectangle, SkeletonSquare, SkeletonText, SkeletonTextBlock };
//# sourceMappingURL=index.modern.js.map
