import { AlertActions } from './AlertActions'
import { AlertContent } from './AlertContent'
import { AlertRoot } from './AlertRoot'
import type { AlertProps } from './props'

export const Alert = ({
  // Variants
  variant = 'filled',
  color = 'error',

  // Content
  title,
  children,
  icon,

  // Action button
  withActionButton = false,
  actionButtonLabel = 'Action',
  onActionButtonClick,

  // Close button
  withCloseButton = false,
  closeButtonLabel = 'Close',
  onClose,

  ...props
}: AlertProps) => {
  return (
    <AlertRoot variant={variant} color={color} {...props}>
      <AlertContent title={title} icon={icon}>
        {children}
      </AlertContent>

      <AlertActions
        color={color}
        withActionButton={withActionButton}
        actionButtonLabel={actionButtonLabel}
        onActionButtonClick={onActionButtonClick}
        withCloseButton={withCloseButton}
        closeButtonLabel={closeButtonLabel}
        onClose={onClose}
      />
    </AlertRoot>
  )
}
