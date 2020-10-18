# react-skeleton-blocks

> Set of React Skeleton UI components for loading content

[![NPM](https://img.shields.io/npm/v/react-skeleton-blocks.svg)](https://www.npmjs.com/package/react-skeleton-blocks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-skeleton-blocks
```

## Usage

### Text

The below example will render a skeleton-ui text component until the child component (in this case, a string) is available. The example sets a default content value of {null} and after 2 seconds, it will set the content to "Hello world!" which will in-turn remove the skeleton-ui component and replace with actual content.

```jsx
import React, {useState, useEffect} from 'react'

import {
  SkeletonText
} from 'react-skeleton-blocks'

class Example extends Component {

  const [content, setContent] = useState(null);

  useEffect(() => {

    // Content will show after 2 seconds
    setTimeout(() => {
      setContent("Hello world!");
    }, 2000);

  }, []);

  render() {
    return <SkeletonText>{content}</SkeletonText>
  }
}
```

### Paragraphs

The below example will render a skeleton-ui paragraph component, similar to above but with multiple lines.

```jsx
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {
  SkeletonParagraph
} from 'react-skeleton-blocks'

class Example extends Component {

  const [paragraph, setParagraph] = useState(null);

  useEffect(() => {

    axios
      .get(
        'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=html'
      )
      .then(res => {
        setParagraph(<div dangerouslySetInnerHTML={{ __html: res.data }}></div>)
      })

  }, []);

  render() {
    return <SkeletonParagraph>{content}</SkeletonParagraph>
  }
}
```

### Images

The below example will render a skeleton-ui image component, which is a rectangular block which will be replaced with the image after it's finished loading. The `SkeletonImage` component takes the same attributes as an `<img>` does anf treats them the same.

```jsx
import React from 'react'

import { SkeletonImage } from 'react-skeleton-blocks'

class Example extends Component {
  render() {
    return (
      <SkeletonImage
        width='600'
        height='300'
        src='https://source.unsplash.com/random/600x300'
        alt='Preloaded from Unsplash'
      />
    )
  }
}
```

### Multi-block

The below example will render a skeleton-ui multi-block component, which is rendered as one or more blocks of mixed paragraph and image content. The example below will render 3 blocks, each block will contain a SkeletonParagraph and SkeletonImage component side-by side. You can set prop `noImages={true}` to render a multi-block of just paragraph skeletons.

```jsx
import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {
  SkeletonMultiBlocks
} from 'react-skeleton-blocks'

class Example extends Component {

  const [paragraph, setParagraph] = useState(null);

  useEffect(() => {

    axios
      .get(
        'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=html'
      )
      .then(res => {
        setParagraph(<div dangerouslySetInnerHTML={{ __html: res.data }}></div>)
      })

  }, []);

  render() {
    return (
      <>
        <SkeletonMultiBlocks blocks={3}>{content}</SkeletonMultiBlocks>
        <SkeletonMultiBlocks blocks={4} noImages={true}>{content}</SkeletonMultiBlocks>
      </>
    );
  }
}
```

### Avatar

A simple skeleton-ui component which displays a circular shape until an image is ready to be shown (after it's loaded).

```jsx
import React from 'react'

import { SkeletonAvatar } from 'react-skeleton-blocks'

class Example extends Component {
  render() {
    return (
      <SkeletonAvatar
        radius='80'
        src='https://source.unsplash.com/random/100x100'
        alt='Preloaded from Unsplash'
      />
    )
  }
}
```

### Shapes

skeleton-ui comes with 3 types of shapes, Rectangle, Square and Circle.

```jsx
import React from 'react'

import { SkeletonCircle, SkeletonRectangle, SkeletonSquare } from 'react-skeleton-blocks'

class Example extends Component {
  render() {
    return (
	  <SkeletonCircle radius={100} />
	  <SkeletonRectangle style={{width: 200, height: 100}} />
	  <SkeletonSquare width={100} />
    )
  }
}
```

## Props

### Shared Props

- `speed` prop determines the animation speed of the gradient fade in seconds, default is `3`.
- `inheritClass` prop specified the parent class for any skeleton-ui component, default is `skeleton-ui-component`.
- `style` prop is applied to any component in the same way React uses the prop to style elements, default `{}`.
- `hideWhen` prop (not applicable to shapes) is a forceful way of removing the skeleton-ui component and replacing it with content, when `true` the content is shown, default `null`.
- `className` prop, much like React, is used to specify a class attribute to a skeleton-ui component, default `''`

### SkeletonImage

- `width` prop determines the width (px) of the image, default `100`
- `height` prop determines the height (px) of the image, default `100`
- `src` prop determines the URL of the image, default `''`
- `alt` prop will display the alt attribute with the props value as the alt attribute's value, default `''`

### SkeletonAvatar

- `radius` prop determines the radius of the circular avatar image, default `40`
- `src` prop determines the URL of the image, default `''`
- `alt` prop will display the alt attribute with the props value as the alt attribute's value, default `''`

### SkeletonText

- `width` prop determines the width (px) of the text block, usually as a percentage, default `100%`

### SkeletonParagraph

- `width` prop determines the width (px) of the text block, usually as a percentage, default `100%`
- `linesPerParagraph` prop determines the number of lines for the paragraph skeleton-ui component, default `3`

### SkeletonImageParagraph

- `lineWidth` prop determines the width of the text block, usually as a percentage, default `100%`
- `imageWidth` prop determines the width (px) of image to represent in the skeleton-ui component, default `100`
- `linesPerParagraph` prop determines the number of lines for the paragraph skeleton-ui component, default `3`

### SkeletonTextBlock

- `width` prop determines the width of the text block, usually as a percentage, default `100%`
- `paragraphs` prop determines the number of paragraphs to represent in the skeleton-ui component, default `3`
- `linesPerParagraph` prop determines the number of lines for the paragraph skeleton-ui component, default `3`

### SkeletonMultiBlock

- `width` prop determines the width of the multi-block, usually as a percentage, default `100%`
- `noImages` prop determines if images should NOT be represented in the skeleton-ui component, default `false`
- `blocks` prop determines the number of blocks to represent in the skeleton-ui component, default `3`
- `linesPerParagraph` prop determines the number of lines for the paragraph skeleton-ui component, default `3`

## License

MIT © [stefandunn](https://github.com/stefandunn)
