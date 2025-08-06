import { useMemo } from 'react'
import type { ButtonProps } from '../props'

export const useButtonClasses = (
  iconPosition: ButtonProps['iconPosition'] = 'left',
  isFullWidth: boolean = false,
  isDisabled: ButtonProps['isDisabled'] = false,
  isRounded: boolean = false,
  children: ButtonProps['children'] = '',
) => {
  const buttonClasses = useMemo(() => {
    const baseClasses = [
      iconPosition === 'right' && 'flex-row-reverse',
      isFullWidth && 'w-full',
      isDisabled && 'cursor-not-allowed',
      isRounded && 'rounded-full',
      !children && 'px-0',
    ].filter(Boolean)

    return baseClasses
  }, [iconPosition, isFullWidth, isDisabled, isRounded, children])

  return { buttonClasses }
}
