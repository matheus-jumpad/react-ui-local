import { cva } from 'class-variance-authority'

type ColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

const colorClasses: Record<ColorType, string> = {
  primary:
    'before:bg-state-primary-outlined-hover data-[state=checked]:bg-primary-main data-[state=checked]:text-white data-[state=checked]:border-primary-main focus-visible:border-primary-main',
  secondary:
    'before:bg-state-secondary-outlined-hover data-[state=checked]:bg-secondary-main data-[state=checked]:text-white data-[state=checked]:border-secondary-main focus-visible:border-secondary-main',
  error:
    'before:bg-state-error-outlined-hover data-[state=checked]:bg-error-main data-[state=checked]:text-white data-[state=checked]:border-error-main focus-visible:border-error-main',
  warning:
    'before:bg-state-warning-outlined-hover data-[state=checked]:bg-warning-main data-[state=checked]:text-white data-[state=checked]:border-warning-main focus-visible:border-warning-main',
  info: 'before:bg-state-info-outlined-hover data-[state=checked]:bg-info-main data-[state=checked]:text-white data-[state=checked]:border-info-main focus-visible:border-info-main',
  success:
    'before:bg-state-success-outlined-hover data-[state=checked]:bg-success-main data-[state=checked]:text-white data-[state=checked]:border-success-main focus-visible:border-success-main',
}

const baseStyles = [
  // Base styles
  'relative shrink-0 rounded-xs border-2 transition-all duration-300',

  // Colors and states
  'border-text-primary',

  // Focus and accessibility
  'outline-none focus-visible:ring-px',

  // Invalid state
  'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',

  // Disabled state
  'disabled:text-action-disabled disabled:before:bg-action-hover disabled:cursor-not-allowed disabled:data-[state=checked]:bg-action-disabled disabled:data-[state=checked]:border-transparent',

  // Pseudo-element (circle background) - centered
  'before:absolute before:-top-[0.8rem] before:-left-[0.8rem] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[""]',

  // Hover effects
  'hover:before:opacity-100',
].join(' ')

export const checkboxVariants = cva(baseStyles, {
  variants: {
    color: colorClasses,
    size: {
      sm: 'size-4 before:size-[2.375rem]', // 16px 38px
      md: 'size-5 before:size-[2.625rem]', // 20px 42px
      lg: 'size-6 before:size-[2.875rem]', // 24px 46px
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
