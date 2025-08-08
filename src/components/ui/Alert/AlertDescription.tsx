import { cn } from '@/lib/utils'
import { ALERT_CONSTANTS } from './constants'
import type { AlertDescriptionProps } from './props'

export const AlertDescription = ({
  className,
  ...props
}: AlertDescriptionProps) => {
  return (
    <div
      data-slot={ALERT_CONSTANTS.DATA_SLOTS.DESCRIPTION}
      className={cn(
        'col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className,
      )}
      {...props}
    />
  )
}
