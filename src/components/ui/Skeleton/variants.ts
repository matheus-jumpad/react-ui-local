import { cva } from 'class-variance-authority'

type VariantType = 'rectangle' | 'text' | 'circle'

const variantClasses: Record<VariantType, string> = {
  rectangle: 'rounded-lg',
  text: 'rounded-sm',
  circle: 'rounded-full',
}

const baseStyles = 'bg-filled-input-bg'
const animationStyles = 'animate-pulse'

export const skeletonVariants = cva(baseStyles, {
  variants: {
    variant: variantClasses,
    isAnimated: {
      true: animationStyles,
      false: '',
    },
  },
  defaultVariants: {
    variant: 'rectangle',
    isAnimated: true,
  },
})
