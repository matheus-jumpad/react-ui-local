import { cn } from '@/lib/utils'
import { buttonVariants } from '../../Button/variants'
import type { ButtonGroupItemProps } from '../props'
import { useButtonGroupContext } from './useButtonGroupContext'

const ORIENTATION_STYLES = {
  horizontal: {
    base: 'border-x-0 not-first:border-l first:rounded-l-md last:rounded-r-md',
    outlined:
      'data-[variant=outlined]:first:border-l data-[variant=outlined]:last:border-r',
  },
  vertical: {
    base: 'w-full border-y-0 not-first:border-t first:rounded-t-md last:rounded-b-md',
    outlined:
      'data-[variant=outlined]:first:border-t data-[variant=outlined]:last:border-b',
  },
} as const

export const useButtonGroupItem = (props: ButtonGroupItemProps) => {
  const { variant, size, color, className, ...restProps } = props
  const context = useButtonGroupContext()

  const finalVariant = context.variant ?? variant
  const finalSize = context.size ?? size
  const finalColor = context.color ?? color

  const baseButtonClasses = buttonVariants({
    variant: finalVariant,
    size: finalSize,
    color: finalColor,
  })

  const groupClasses = cn(
    'min-w-0 shrink-0 rounded-none focus:z-10 focus-visible:z-10',
    context.orientation && ORIENTATION_STYLES[context.orientation].base,
    context.orientation && ORIENTATION_STYLES[context.orientation].outlined,
  )

  const buttonClasses = cn(baseButtonClasses, groupClasses, className)

  return {
    buttonClasses,
    finalVariant,
    finalSize,
    finalColor,
    restProps,
  }
}
