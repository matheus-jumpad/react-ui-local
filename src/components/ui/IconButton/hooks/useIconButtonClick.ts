import { useCallback } from 'react'
import type { IconButtonProps } from '../props'

export const useIconButtonClick = (
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  href: IconButtonProps['href'],
  target: IconButtonProps['target'],
  isDisabled: IconButtonProps['isDisabled'] = false,
  isLoading: IconButtonProps['isLoading'] = false,
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
