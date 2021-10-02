import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../Layout/Container'
import { PageHeaderProps } from './types'

//  top nav behind color

const Outer = styled(Box)<{ background?: string }>`
  background-color: rgb(152, 209, 152);
  `
  // background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: rgb(152, 209, 152);
`

const PageHeader: React.FC<PageHeaderProps> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
