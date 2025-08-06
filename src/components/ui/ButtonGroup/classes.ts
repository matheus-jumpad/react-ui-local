import { cn } from '@/lib/utils'
import type { ButtonGroupOrientation } from './props'

export const getButtonGroupClasses = (
  className?: string,
  orientation: ButtonGroupOrientation = 'horizontal',
) => {
  return cn(
    'flex items-center rounded-md',
    className,
    orientation === 'horizontal' ? 'flex-row' : 'flex-col',
  )
}
