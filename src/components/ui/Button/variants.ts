import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

type VariantType = 'contained' | 'outlined' | 'text'
type ColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

const colorClassesBase: Record<VariantType, string> = {
  contained:
    'shadow-elevation-300 hover:shadow-elevation-400 disabled:bg-action-disabled-bg text-white',
  outlined: 'border bg-transparent disabled:border-action-disabled',
  text: 'bg-transparent shadow-none hover:bg-gray-100',
}

const colorClasses: Record<VariantType, Record<ColorType, string>> = {
  contained: {
    primary:
      'bg-primary-main hover:bg-primary-dark active:bg-primary-800 border-state-primary-contained-hover',
    secondary:
      'bg-secondary-main hover:bg-secondary-dark active:bg-secondary-800 border-state-secondary-contained-hover',
    error:
      'bg-error-main hover:bg-error-dark active:bg-error-800 border-state-error-contained-hover',
    warning:
      'bg-warning-main hover:bg-warning-dark active:bg-warning-800 border-state-warning-contained-hover',
    info: 'bg-info-main hover:bg-info-dark active:bg-info-800 border-state-info-contained-hover',
    success:
      'bg-success-main hover:bg-success-dark active:bg-success-800 border-state-success-contained-hover',
  },
  outlined: {
    primary:
      'border-state-primary-outlined-resting-border hover:bg-primary-outlined text-primary-main',
    secondary:
      'border-state-secondary-outlined-resting-border hover:bg-secondary-outlined text-secondary-main',
    error:
      'border-state-error-outlined-resting-border hover:bg-error-outlined text-error-main',
    warning:
      'border-state-warning-outlined-resting-border hover:bg-warning-outlined text-warning-main',
    info: 'border-state-info-outlined-resting-border hover:bg-info-outlined text-info-main',
    success:
      'border-state-success-outlined-resting-border hover:bg-success-outlined text-success-main',
  },
  text: {
    primary:
      'text-primary-main hover:bg-primary-outlined border-state-primary-outlined-resting-border',
    secondary:
      'text-secondary-main hover:bg-secondary-outlined border-state-secondary-outlined-resting-border',
    error:
      'text-error-main hover:bg-error-outlined border-state-error-outlined-resting-border',
    warning:
      'text-warning-main hover:bg-warning-outlined border-state-warning-outlined-resting-border',
    info: 'text-info-main hover:bg-info-outlined border-state-info-outlined-resting-border',
    success:
      'text-success-main hover:bg-success-outlined border-state-success-outlined-resting-border',
  },
}

const variants: VariantType[] = ['contained', 'outlined', 'text']
const colors: ColorType[] = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
]

const compoundVariants = variants.flatMap((variant) =>
  colors.map((color) => ({
    variant,
    color,
    class: cn(colorClassesBase[variant], colorClasses[variant][color]),
  })),
)

const baseStyles = [
  // Focus & accessibility
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  // Invalid state
  'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
  // Layout & spacing
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-lg whitespace-nowrap',
  // Typography & transitions
  'font-medium transition-all duration-200 outline-none',
  // Disabled state
  'disabled:text-text-disabled disabled:pointer-events-none',
  // Loading state
  'data-[loading=true]:animate-pulse data-[loading=true]:pointer-events-none',
  // SVG icons
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(' ')

export const buttonVariants = cva(baseStyles, {
  variants: {
    variant: {
      contained: '',
      outlined: '',
      text: '',
    },
    color: {
      primary: '',
      secondary: '',
      error: '',
      warning: '',
      info: '',
      success: '',
    },
    size: {
      sm: 'h-[1.875rem] min-w-[1.875rem] px-[0.8125rem] text-[0.8125rem] leading-[1.375rem]', // 30px 30px 13px 13px 22px 22px
      md: 'h-[2.375rem] min-w-[2.375rem] px-[1.375rem] text-[0.875rem] leading-[1.5rem]', // 38px 38px 22px 14px 24px 24px
      lg: 'h-[2.625rem] min-w-[2.625rem] px-[1.625rem] text-[0.9375rem] leading-[1.625rem]', // 42px 42px 26px 15px 26px 26px
    },
  },
  compoundVariants,
  defaultVariants: {
    variant: 'contained',
    color: 'primary',
    size: 'md',
  },
})
