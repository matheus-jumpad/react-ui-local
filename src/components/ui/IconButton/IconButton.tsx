import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { DEFAULT_BUTTON_CONFIG } from './constants'
import { useIconButtonClick } from './hooks'
import { LoadingIcon } from './LoadingIcon'
import type { IconButtonProps } from './props'
import { buttonVariants } from './variants'

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      color,
      size,
      onClick,
      href,
      target,
      isLoading = DEFAULT_BUTTON_CONFIG.IS_LOADING,
      isDisabled = DEFAULT_BUTTON_CONFIG.IS_DISABLED,
      asChild = DEFAULT_BUTTON_CONFIG.AS_CHILD,
      children,
      ...props
    },
    ref,
  ) => {
    const { handleClick } = useIconButtonClick(
      onClick,
      href,
      target,
      isDisabled,
      isLoading,
    )

    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ color, size, className }))}
        disabled={isDisabled}
        data-loading={isLoading}
        onClick={handleClick}
        {...props}
      >
        {!isLoading && children}

        {isLoading && <LoadingIcon />}
      </Comp>
    )
  },
)
IconButton.displayName = 'IconButton'

export { IconButton }
