'use client'

import * as React from 'react'
import { getButtonGroupClasses } from './classes'
import { ButtonGroupContext } from './hooks/useButtonGroupContext'
import type { ButtonGroupProps } from './props'

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      variant,
      size,
      color,
      children,
      orientation = 'horizontal',
      ...props
    },
    ref,
  ) => {
    const contextValue = React.useMemo(
      () => ({ variant, size, color, orientation }),
      [variant, size, color, orientation],
    )

    return (
      <div
        ref={ref}
        data-variant={variant}
        data-size={size}
        className={getButtonGroupClasses(className, orientation)}
        {...props}
      >
        <ButtonGroupContext.Provider value={contextValue}>
          {children}
        </ButtonGroupContext.Provider>
      </div>
    )
  },
)
ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
