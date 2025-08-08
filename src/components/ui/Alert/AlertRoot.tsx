import { cn } from '@/lib/utils'
import { ALERT_CONSTANTS } from './constants'
import type { AlertRootProps } from './props'
import { alertVariants } from './variants'

export const AlertRoot = ({
  className,
  variant,
  color,
  ...props
}: AlertRootProps) => {
  return (
    <div
      data-slot={ALERT_CONSTANTS.DATA_SLOTS.ALERT}
      role="alert"
      className={cn(alertVariants({ variant, color }), className)}
      {...props}
    />
  )
}
