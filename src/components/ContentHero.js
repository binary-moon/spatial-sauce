import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import BackgroundImage from 'gatsby-background-image'

import ContentWrapper from './ContentWrapper';
import { HeroDecoration } from './HeroDecoration'

import { rem } from '../utils/mixins'

const Wrapper = styled.div`
  position: relative;
  padding: ${rem(149)} 0 0;
  min-height: ${rem(620)};

  &.blueGreen {
    background: linear-gradient(126deg, ${props => props.theme.background.blue} 52%, ${props => props.theme.background.green} 100%);
  }

  ${props => props.theme.mediaQueries.desktop} {
    min-height: ${rem(917)};
    padding: ${rem(255)} 0 0;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
`

const Tag = styled.h4`
  font-size: ${rem(12)};
  line-height: ${rem(14)};
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.theme.colors.white};

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(14)};
  }
`

const Title = styled.h1`
  font-size: ${rem(38)};
  line-height: ${rem(42)};
  font-weight: 900;
  color: ${props => props.theme.colors.white};
  margin: ${rem(24)} 0 0;

  ${props => props.theme.mediaQueries.desktop} {
    font-size: ${rem(80)};
    line-height: ${rem(90)};
  }
`

const Arrow = styled.span`
  font-size: ${rem(50)};
  line-height: 1;
  color: ${props => props.theme.colors.white};
  margin-top: ${rem(60)};
  display: block;

  ${props => props.theme.mediaQueries.desktop} {
    margin-top: ${rem(60)};
  }
`

const StyledHeroDecoration = styled(HeroDecoration)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

const BackgroundSection = ({ className, image }) => (
  <BackgroundImage className={className} Tag="section" fluid={image.childImageSharp.fluid}/>
)

const StyledBackgroundSection = styled(BackgroundSection)`
  position: absolute !important;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ContentHero = ({ background, tag, title, image }) => {
  return (
    <Wrapper className={classnames(background)}>
      {!image &&
        <StyledHeroDecoration className={classnames(background)} />
      }
      {image &&
        <StyledBackgroundSection image={image} />
      }
      <StyledContentWrapper>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Arrow>&#8595;</Arrow>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default ContentHero
