import { AlertDescription } from './AlertDescription'
import { AlertTitle } from './AlertTitle'
import { ALERT_CONSTANTS } from './constants'
import type { AlertContentProps } from './props'

export const AlertContent = ({
  title,
  children,
  icon: Icon,
}: AlertContentProps) => {
  return (
    <>
      {Icon && (
        <Icon data-slot={ALERT_CONSTANTS.DATA_SLOTS.ICON} aria-hidden="true" />
      )}
      {title && <AlertTitle>{title}</AlertTitle>}
      {children && <AlertDescription>{children}</AlertDescription>}
    </>
  )
}
