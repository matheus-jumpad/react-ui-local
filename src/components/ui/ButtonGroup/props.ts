import { type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { buttonVariants } from '../Button/variants'

export type ButtonGroupOrientation = 'horizontal' | 'vertical'
export type ButtonGroupVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonGroupColor = VariantProps<typeof buttonVariants>['color']
export type ButtonGroupSize = VariantProps<typeof buttonVariants>['size']

export interface ButtonGroupContextValue
  extends VariantProps<typeof buttonVariants> {
  orientation?: ButtonGroupOrientation
}

export interface ButtonGroupProps
  extends Omit<React.ComponentProps<'div'>, 'color'>,
    VariantProps<typeof buttonVariants> {
  orientation?: ButtonGroupOrientation
}

export interface ButtonGroupItemProps
  extends Omit<React.ComponentProps<'button'>, 'color'>,
    VariantProps<typeof buttonVariants> {}

export interface ButtonGroupContextType {
  variant?: ButtonGroupVariant
  size?: ButtonGroupSize
  color?: ButtonGroupColor
  orientation?: ButtonGroupOrientation
}
