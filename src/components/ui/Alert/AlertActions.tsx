import { Button } from '@/components/ui'
import { X } from 'lucide-react'
import { ALERT_CONSTANTS } from './constants'
import type { AlertActionsProps, AlertStyleProps } from './props'

interface AlertActionsComponentProps
  extends AlertActionsProps,
    Pick<AlertStyleProps, 'color'> {}

export const AlertActions = ({
  color,
  withActionButton = false,
  actionButtonLabel = ALERT_CONSTANTS.DEFAULT_LABELS.ACTION_BUTTON,
  onActionButtonClick,
  withCloseButton = false,
  closeButtonLabel = ALERT_CONSTANTS.DEFAULT_LABELS.CLOSE_BUTTON,
  onClose,
}: AlertActionsComponentProps) => {
  // Se não há nenhuma ação, não renderiza nada
  if (!withActionButton && !withCloseButton) {
    return null
  }

  return (
    <div className={ALERT_CONSTANTS.ACTIONS_CONTAINER_CLASSES}>
      {withActionButton && (
        <Button
          data-slot={ALERT_CONSTANTS.DATA_SLOTS.ACTION}
          variant="text"
          color={color}
          size="sm"
          className="uppercase"
          onClick={onActionButtonClick}
          aria-label={actionButtonLabel}
        >
          {actionButtonLabel}
        </Button>
      )}

      {withCloseButton && (
        <X
          data-slot={ALERT_CONSTANTS.DATA_SLOTS.CLOSE}
          className={ALERT_CONSTANTS.ICON_CLASSES}
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Enter' && onClose?.()}
          tabIndex={0}
          role="button"
          aria-label={closeButtonLabel}
        />
      )}
    </div>
  )
}
