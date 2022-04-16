import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const ButtonSubmit = ({ children, disabled, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}
ButtonSubmit.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
