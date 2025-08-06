'use client'

import { cn } from '@/lib/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Label } from '../Label'
import { useCheckboxIcon, useHtmlFor } from './hooks'
import type { CheckboxProps } from './props'
import { checkboxVariants } from './variants'

const Checkbox = ({
  className,
  children,
  variant = 'check',
  color,
  size,
  isDisabled,
  ...props
}: CheckboxProps) => {
  const { htmlFor } = useHtmlFor(props.id, props.name)
  const { icon } = useCheckboxIcon(variant)

  return (
    <div className="flex items-center gap-3">
      <CheckboxPrimitive.Root
        id={htmlFor}
        data-slot="checkbox"
        className={cn(checkboxVariants({ color, size }), className)}
        disabled={isDisabled}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center"
        >
          {icon}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {children && (
        <Label htmlFor={htmlFor} isDisabled={isDisabled}>
          {children}
        </Label>
      )}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

export { Checkbox }
