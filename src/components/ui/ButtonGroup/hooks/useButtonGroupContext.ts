import * as React from 'react'
import type { ButtonGroupContextValue } from '../props'

export const useButtonGroupContext = () => {
  const context = React.useContext(ButtonGroupContext)

  if (!context) {
    throw new Error('ButtonGroupItem deve ser usado dentro de um ButtonGroup')
  }

  return context
}

export const ButtonGroupContext =
  React.createContext<ButtonGroupContextValue | null>(null)
