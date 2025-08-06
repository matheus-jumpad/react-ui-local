import { cva } from 'class-variance-authority'

const baseStyles = [
  // Focus & accessibility
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-2',
  // Layout & spacing
  'inline-flex shrink-0 items-center justify-center rounded-full',
  // Transitions
  'transition-all duration-200 outline-none',
  // Disabled state
  'disabled:text-text-disabled disabled:pointer-events-none',
  // Loading state
  'data-[loading=true]:animate-pulse data-[loading=true]:pointer-events-none',
  // SVG icons
  '[&_svg]:pointer-events-none [&_svg]:shrink-0',
].join(' ')

export const buttonVariants = cva(baseStyles, {
  variants: {
    color: {
      primary:
        'text-primary-main hover:bg-state-primary-outlined-hover active:text-primary-dark active:bg-state-primary-outline-selected',
      secondary:
        'text-secondary-main hover:bg-state-secondary-outlined-hover active:text-secondary-dark active:bg-state-secondary-outline-selected',
      error:
        'text-error-main hover:bg-state-error-outlined-hover active:text-error-dark active:bg-state-error-outline-selected',
      warning:
        'text-warning-main hover:bg-state-warning-outlined-hover active:text-warning-dark active:bg-state-warning-outline-selected',
      info: 'text-info-main hover:bg-state-info-outlined-hover active:text-info-dark active:bg-state-info-outline-selected',
      success:
        'text-success-main hover:bg-state-success-outlined-hover active:text-success-dark active:bg-state-success-outline-selected',
    },
    size: {
      sm: 'h-[1.75rem] min-w-[1.75rem] [&_svg]:size-5', // 20px
      md: 'h-[2.50rem] min-w-[2.50rem] [&_svg]:size-6', // 24px
      lg: 'h-[3.125rem] min-w-[3.125rem] [&_svg]:size-9', // 36px
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
