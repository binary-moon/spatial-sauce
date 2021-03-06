import React from 'react';

import ContentHero from '../components/ContentHero'
import ImageFullScreen from '../components/ImageFullScreen'
import ContentRowWithImage from '../components/ContentRowWithImage'
import ContentHTMLWithImages from '../components/ContentHTMLWithImages'
import TextBanner from '../components/TextBanner'
import ContentFullScreen from '../components/ContentFullScreen'
import SectionTitle from '../components/SectionTitle'
import TextTwoCol from '../components/TextTwoCol'
import Shape from '../components/Shape'
import ContentVideo from '../components/ContentVideo'


const getComponent = (type) => {
  switch(type) {
    case 'ContentHero':
      return ContentHero
    case 'ImageFullScreen':
      return ImageFullScreen
    case 'ContentRowWithImage':
      return ContentRowWithImage
    case 'ContentHTMLWithImages':
      return ContentHTMLWithImages
    case 'TextBanner':
      return TextBanner
    case 'ContentFullScreen':
      return ContentFullScreen
    case 'SectionTitle':
      return SectionTitle
    case 'TextTwoCol':
      return TextTwoCol
    case 'ContentVideo':
      return ContentVideo
  }
}

export const renderComponent = (id, type, props, shape) => {
  const Component = getComponent(type)

  if(Component) {
    if (shape) {
      return (
        <Component {...props} key={id}>
          <Shape {...shape} />
        </Component>
      )
    }
    return (
      <Component {...props} key={id} />
    )
  }
}