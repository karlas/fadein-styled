import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const fadeIn = time => css`
  animation-name: ${ fadeInAnimation };
  animation-duration: ${ time }s;
`

const Circle = styled.div`
  ${ fadeIn(2) }
  height: 100px;
  width: 100px;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`

export default () => (
  <Container>
    <Circle />
  </Container>
)
