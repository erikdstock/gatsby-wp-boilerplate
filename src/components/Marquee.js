import React from 'react'
import styled from 'styled-components'
import { colors } from '../support/styles'
import PropTypes from 'prop-types'

const marquee = ({ className, children }) => (
  <marquee className={className} direction="left">
    {children}
  </marquee>
)

const Marquee = styled(marquee)`
  font-family: helvetica;
  font-weight: bold;
  background-color: ${colors.red};
  color: ${colors.white};
  border: 2px solid ${colors.black};
  border-radius: 4px;
  width: 30%;
  min-width: 100px;
  height: 2em;
  display: flex;
  align-items: center;
`

Marquee.propTypes = {
  children: PropTypes.string.isRequired
}

export default Marquee