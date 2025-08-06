import { type VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import * as React from 'react'
import { buttonVariants } from './variants'

export type IconButtonColor = VariantProps<typeof buttonVariants>['color']
export type IconButtonSize = VariantProps<typeof buttonVariants>['size']

export type IconButtonClickHandler = React.MouseEventHandler<HTMLButtonElement>
export type IconButtonRef = React.Ref<HTMLButtonElement>

export interface IconButtonLinkConfig {
  href?: string
  target?: React.HTMLAttributeAnchorTarget
}

export interface IconButtonLoadingConfig {
  isLoading?: boolean
}

export interface IconButtonDisabledConfig {
  isDisabled?: boolean
}

export interface IconButtonLayoutConfig {
  asChild?: boolean
}

export interface IconButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color' | 'children'>,
    VariantProps<typeof buttonVariants>,
    IconButtonLinkConfig,
    IconButtonLoadingConfig,
    IconButtonDisabledConfig,
    IconButtonLayoutConfig {
  children: React.ReactElement<LucideIcon>
}
