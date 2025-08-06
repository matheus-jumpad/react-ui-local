import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { DEFAULT_BUTTON_CONFIG } from './constants'
import {
  useButtonClasses,
  useButtonClick,
  useButtonIcon,
  useButtonText,
} from './hooks'
import { LoadingIcon } from './LoadingIcon'
import type { ButtonProps } from './props'
import { buttonVariants } from './variants'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      onClick,
      icon: Icon,
      iconPosition = DEFAULT_BUTTON_CONFIG.ICON_POSITION,
      iconClassName,
      href,
      target,
      isLoading = DEFAULT_BUTTON_CONFIG.IS_LOADING,
      loadingText,
      isDisabled = DEFAULT_BUTTON_CONFIG.IS_DISABLED,
      disabledText,
      isFullWidth = DEFAULT_BUTTON_CONFIG.IS_FULL_WIDTH,
      isRounded = DEFAULT_BUTTON_CONFIG.IS_ROUNDED,
      asChild = DEFAULT_BUTTON_CONFIG.AS_CHILD,
      children,
      ...props
    },
    ref,
  ) => {
    const { showIcon } = useButtonIcon(Icon, isLoading)
    const { buttonText } = useButtonText(
      children,
      isLoading,
      loadingText,
      isDisabled,
      disabledText,
    )
    const { handleClick } = useButtonClick(
      onClick,
      href,
      target,
      isDisabled,
      isLoading,
    )
    const { buttonClasses } = useButtonClasses(
      iconPosition,
      isFullWidth,
      isDisabled,
      isRounded,
      children,
    )

    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(
          buttonVariants({ variant, color, size, className }),
          ...buttonClasses,
        )}
        disabled={isDisabled}
        data-loading={isLoading}
        onClick={handleClick}
        {...props}
      >
        {showIcon && Icon && <Icon className={cn(iconClassName)} />}

        {isLoading && <LoadingIcon />}

        {buttonText()}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button }
