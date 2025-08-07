import type { VariantProps } from 'class-variance-authority'
import type { skeletonVariants } from './variants'

export interface SkeletonProps extends React.ComponentProps<'div'> {
  variant?: VariantProps<typeof skeletonVariants>['variant']
  isVisible?: boolean
  isAnimated?: boolean
}
