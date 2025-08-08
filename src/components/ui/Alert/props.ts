import type { VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import type { alertVariants } from './variants'

export type AlertRootProps = React.ComponentProps<'div'> &
  VariantProps<typeof alertVariants>

export type AlertTitleProps = React.ComponentProps<'div'>

export type AlertDescriptionProps = React.ComponentProps<'div'>

export interface AlertContentProps {
  title?: string
  children?: React.ReactNode
  icon?: LucideIcon
}

export interface AlertActionsProps {
  withCloseButton?: boolean
  closeButtonLabel?: string
  onClose?: () => void

  withActionButton?: boolean
  actionButtonLabel?: string
  onActionButtonClick?: () => void
}

export interface AlertStyleProps {
  variant?: VariantProps<typeof alertVariants>['variant']
  color?: NonNullable<VariantProps<typeof alertVariants>['color']>
}

export interface AlertProps
  extends Omit<React.ComponentProps<'div'>, 'color'>,
    AlertContentProps,
    AlertActionsProps,
    AlertStyleProps {}
