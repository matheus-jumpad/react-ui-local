import { useCallback } from 'react'
import type { ButtonProps } from '../props'

export const useButtonClick = (
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  href: ButtonProps['href'],
  target: ButtonProps['target'],
  isDisabled: ButtonProps['isDisabled'] = false,
  isLoading: ButtonProps['isLoading'] = false,
) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) return

      if (href) {
        window.open(href, target)
        return
      }

      onClick?.(e)
    },
    [isDisabled, isLoading, href, target, onClick],
  )

  return { handleClick }
}
