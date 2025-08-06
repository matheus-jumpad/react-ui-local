'use client'

import * as React from 'react'
import { BUTTON_GROUP_SLOT_VALUES } from './constants'
import { useButtonGroupItem } from './hooks/useButtonGroupItem'
import type { ButtonGroupItemProps } from './props'

const ButtonGroupItem = React.forwardRef<
  HTMLButtonElement,
  ButtonGroupItemProps
>((props, ref) => {
  const { buttonClasses, finalVariant, finalSize, restProps } =
    useButtonGroupItem(props)

  return (
    <button
      ref={ref}
      data-slot={BUTTON_GROUP_SLOT_VALUES.TOGGLE_GROUP_ITEM}
      data-variant={finalVariant}
      data-size={finalSize}
      className={buttonClasses}
      {...restProps}
    >
      {props.children}
    </button>
  )
})
ButtonGroupItem.displayName = 'ButtonGroupItem'

export { ButtonGroupItem }
