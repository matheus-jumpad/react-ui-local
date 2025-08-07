import { cn } from '@/lib/utils'
import type { SkeletonProps } from './props'
import { skeletonVariants } from './variants'

const Skeleton = ({
  className,
  variant,
  isVisible = true,
  isAnimated = true,
  children,
  ...props
}: SkeletonProps) => {
  if (children && !isVisible) {
    return children
  }

  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ variant, isAnimated }), className)}
      {...props}
    >
      {children && (
        <span className={cn(isVisible && 'invisible')}>{children}</span>
      )}
    </div>
  )
}

export { Skeleton }
