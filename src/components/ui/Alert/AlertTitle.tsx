import { cn } from '@/lib/utils'
import { ALERT_CONSTANTS } from './constants'
import type { AlertTitleProps } from './props'

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => {
  return (
    <div
      data-slot={ALERT_CONSTANTS.DATA_SLOTS.TITLE}
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  )
}
