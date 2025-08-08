import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

type VariantType = 'filled' | 'outlined' | 'standard'
type ColorType = 'error' | 'warning' | 'info' | 'success'

const colorClassesBase: Record<VariantType, string> = {
  filled: '[&>div>button]:text-white',
  outlined: 'border',
  standard: '',
}

const colorClasses: Record<VariantType, Record<ColorType, string>> = {
  filled: {
    error: 'bg-error-light text-white',
    warning: 'bg-warning-light text-white',
    info: 'bg-info-light text-white',
    success: 'bg-success-light text-white',
  },
  outlined: {
    error:
      'border-error-content text-error-content [&>div>button]:text-error-content',
    warning:
      'border-warning-content text-warning-content [&>div>button]:text-warning-content',
    info: 'border-info-content text-info-content [&>div>button]:text-info-content',
    success:
      'border-success-content text-success-content [&>div>button]:text-success-content',
  },
  standard: {
    error:
      'bg-error text-error-main [&_[data-slot=alert-description]]:text-error-content ',
    warning:
      'bg-warning text-warning-main [&_[data-slot=alert-description]]:text-warning-content',
    info: 'bg-info text-info-main [&_[data-slot=alert-description]]:text-info-content',
    success:
      'bg-success text-success-main [&_[data-slot=alert-description]]:text-success-content',
  },
}

const variants: VariantType[] = ['filled', 'outlined', 'standard']
const colors: ColorType[] = ['error', 'warning', 'info', 'success']

const compoundVariants = variants.flatMap((variant) =>
  colors.map((color) => ({
    variant,
    color,
    class: cn(colorClassesBase[variant], colorClasses[variant][color]),
  })),
)

const baseStyles = [
  // Layout
  'relative w-full rounded-lg',

  // Spacing
  'px-4 py-3',

  // Grid
  'grid has-[>svg:not([data-slot=close])]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr]',

  // Gap and alignment
  'has-[>svg]:gap-x-3 gap-y-2 items-start',

  // Icon
  '[&>svg]:size-5 [&>svg:not([data-slot=close])]:translate-y-0.5',
].join(' ')

export const alertVariants = cva(baseStyles, {
  variants: {
    variant: {
      filled: '',
      outlined: '',
      standard: '',
    },
    color: {
      error: '',
      warning: '',
      info: '',
      success: '',
    },
  },
  compoundVariants,
  defaultVariants: {
    variant: 'filled',
    color: 'error',
  },
})
