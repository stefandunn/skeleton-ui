import React, { useEffect, useState } from 'react'

import {
  SkeletonText,
  SkeletonParagraph,
  SkeletonTextBlock,
  SkeletonImage,
  SkeletonAvatar,
  SkeletonImageParagraph,
  SkeletonMultiBlocks,
  SkeletonRectangle
} from 'skeleton-ui'

import axios from 'axios'

const App = () => {
  const [text, setText] = useState(null)
  const [paragraph, setParagraph] = useState(null)
  const [textBlock, setTextBlock] = useState(null)
  const [imageText, setImageText] = useState(null)
  const [multiBlock, setMultiBlock] = useState(null)

  const [showWhenVal, setShowWhenVal] = useState(null)
  const [hideWhenVal, setHidewhenVal] = useState(null)

  const placeholderImg =
    'https://images.unsplash.com/photo-1598132204781-cd70d4ed59a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=400'

  useEffect(() => {
    // Text
    axios
      .get('https://baconipsum.com/api/?type=all-meat&start-with-lorem=1')
      .then((res) => {
        setTimeout(() => {
          setText(res.data[0].split('.')[0])
        }, 3000)
      })

    // Paragraph
    axios
      .get(
        'https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=html'
      )
      .then((res) => {
        setParagraph(<div dangerouslySetInnerHTML={{ __html: res.data }}></div>)
      })

    // Text block
    axios
      .get(
        'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html'
      )
      .then((res) => {
        setTextBlock(<div dangerouslySetInnerHTML={{ __html: res.data }}></div>)
      })

    axios
      .get('https://baconipsum.com/api/?type=all-meat&start-with-lorem=1')
      .then((res) => {
        const text = res.data[0]
        let image = new Image()
        image.src = placeholderImg
        image.onload = () => {
          setImageText(
            <>
              <img
                src={placeholderImg}
                width='200'
                height='100'
                alt='From unsplash'
                style={{ float: 'right', marginRight: 10, marginBottom: 10 }}
              />
              <p>{text}</p>
            </>
          )
        }
      })

    axios
      .get('https://baconipsum.com/api/?type=all-meat&start-with-lorem=1')
      .then((res) => {
        const text = res.data[0]
        let image = new Image()
        image.src = placeholderImg
        image.onload = () => {
          setMultiBlock(
            <>
              <img
                src={placeholderImg}
                width='200'
                height='100'
                alt='From unsplash'
                style={{ float: 'right', marginRight: 10, marginBottom: 10 }}
              />
              <p>{text}</p>
              <img
                src={placeholderImg}
                width='200'
                height='100'
                alt='From unsplash'
                style={{ float: 'left', marginRight: 10, marginBottom: 10 }}
              />
              <p>{text}</p>
              <img
                src={placeholderImg}
                width='200'
                height='100'
                alt='From unsplash'
                style={{ float: 'right', marginRight: 10, marginBottom: 10 }}
              />
              <p>{text}</p>
            </>
          )
        }
      })
  }, [])

  return (
    <>
      <style
        media='all'
        type='text/css'
        dangerouslySetInnerHTML={{
          __html: `
				#examples p{
					margin-bottom: 10px;
				}
			`
        }}
      />
      <div className='w-full max-w-screen-xl mx-auto px-6 my-5' id='examples'>
        <div className='grid grid-cols-1'>
          <div className='mb-4'>
            <h1 className='text-4xl font-thin text-purple-600'>Components</h1>
          </div>

          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Avatar</h5>
              <SkeletonAvatar
                radius='80'
                src='https://source.unsplash.com/random/600x600'
                alt='Preloaded from Unsplash'
              />
            </div>
          </div>
          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Paragraph with image</h5>
              <SkeletonImageParagraph>{imageText}</SkeletonImageParagraph>
            </div>
          </div>
          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Multiblock</h5>
              <SkeletonMultiBlocks blocks={3}>{multiBlock}</SkeletonMultiBlocks>
            </div>
          </div>
          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Multiblock (no images)</h5>
              <SkeletonMultiBlocks noImages={true} blocks={3}>
                {multiBlock}
              </SkeletonMultiBlocks>
            </div>
          </div>
          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Text</h5>
              <SkeletonText>{text}</SkeletonText>
            </div>
          </div>

          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Paragraph</h5>
              <SkeletonParagraph>{paragraph}</SkeletonParagraph>
            </div>
          </div>

          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Text Block</h5>
              <SkeletonTextBlock>{textBlock}</SkeletonTextBlock>
            </div>
          </div>

          <div>
            <div className='p-4 bg-gray-100 shadow-sm rounded-sm'>
              <h5 className='text-xl text-blue-500'>Image</h5>
              <SkeletonImage
                width='600'
                height='300'
                src='https://source.unsplash.com/random/600x300'
                alt='Preloaded from Unsplash'
              />
            </div>
          </div>
        </div>
        <div>
          <div className='mt-5 p-4 bg-gray-100 shadow-sm rounded-sm'>
            <h5 className='text-xl text-blue-500'>Rectangle</h5>
            <h6 className='text-xl text-blue-500'>
              Show content when button is clicked
            </h6>
            <button
              className='bg-green-300 text-white px-4 py-1 rounded-md m-1'
              onClick={() => {
                setShowWhenVal(true)
              }}
            >
              Show
            </button>
            <SkeletonRectangle showWhen={showWhenVal}>
              Content
            </SkeletonRectangle>
            <SkeletonImage
              src='https://source.unsplash.com/random/600x600'
              showWhen={showWhenVal}
            />
            <h6 className='text-xl text-blue-500'>
              Hide content when button clicked
            </h6>
            <button
              className='bg-green-300 text-white px-4 py-1 rounded-md m-1'
              onClick={() => {
                setHidewhenVal(true)
              }}
            >
              Hide
            </button>
            <SkeletonRectangle hideWhen={hideWhenVal}>
              Content
            </SkeletonRectangle>
            <SkeletonImage
              src='https://source.unsplash.com/random/600x600'
              hideWhen={hideWhenVal}
            />
            <h6 className='text-xl text-blue-500'>
              Show content when becomes available
            </h6>
            <SkeletonRectangle debug={true}>{text}</SkeletonRectangle>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
