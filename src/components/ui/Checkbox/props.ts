import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import type { VariantProps } from 'class-variance-authority'
import type { checkboxVariants } from './variants'

export type CheckboxVariant = 'check' | 'line'

export interface CheckboxProps
  extends Omit<CheckboxPrimitive.CheckboxProps, 'color'> {
  children?: string
  variant?: CheckboxVariant
  color?: VariantProps<typeof checkboxVariants>['color']
  size?: VariantProps<typeof checkboxVariants>['size']
  isDisabled?: boolean
}
