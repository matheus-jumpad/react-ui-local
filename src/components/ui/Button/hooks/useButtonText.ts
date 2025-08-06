import { useCallback, type ReactNode } from 'react'
import type { ButtonProps } from '../props'

export const useButtonText = (
  children: ReactNode,
  isLoading: ButtonProps['isLoading'] = false,
  loadingText: ButtonProps['loadingText'],
  isDisabled: ButtonProps['isDisabled'] = false,
  disabledText: ButtonProps['disabledText'],
) => {
  const buttonText = useCallback(() => {
    if (isLoading && loadingText) return loadingText
    if (isDisabled && disabledText) return disabledText
    return children
  }, [isLoading, loadingText, isDisabled, disabledText, children])

  return { buttonText }
}
