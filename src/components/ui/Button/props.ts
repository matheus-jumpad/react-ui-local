import { type VariantProps } from 'class-variance-authority'
import { type LucideIcon } from 'lucide-react'
import * as React from 'react'
import type { ClassNameValue } from 'tailwind-merge'
import { buttonVariants } from './variants'

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonColor = VariantProps<typeof buttonVariants>['color']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']

export type IconPosition = 'left' | 'right'
export type ButtonState = 'normal' | 'loading' | 'disabled'

export type ButtonClickHandler = React.MouseEventHandler<HTMLButtonElement>
export type ButtonRef = React.Ref<HTMLButtonElement>

export interface ButtonIconConfig {
  icon?: LucideIcon
  iconPosition?: IconPosition
  iconClassName?: ClassNameValue
}

export interface ButtonLinkConfig {
  href?: string
  target?: React.HTMLAttributeAnchorTarget
}

export interface ButtonLoadingConfig {
  isLoading?: boolean
  loadingText?: string
}

export interface ButtonDisabledConfig {
  isDisabled?: boolean
  disabledText?: string
}

export interface ButtonLayoutConfig {
  isFullWidth?: boolean
  asChild?: boolean
  isRounded?: boolean
}

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color'>,
    VariantProps<typeof buttonVariants>,
    ButtonIconConfig,
    ButtonLinkConfig,
    ButtonLoadingConfig,
    ButtonDisabledConfig,
    ButtonLayoutConfig {}
