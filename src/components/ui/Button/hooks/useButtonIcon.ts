import { useMemo } from 'react'
import type { ButtonProps } from '../props'

export const useButtonIcon = (
  icon: ButtonProps['icon'],
  isLoading: ButtonProps['isLoading'] = false,
) => {
  const showIcon = useMemo(() => {
    if (isLoading) return false
    return !!icon
  }, [isLoading, icon])

  return { showIcon }
}
