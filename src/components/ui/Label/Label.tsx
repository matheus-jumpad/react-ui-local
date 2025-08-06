'use client'

import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'
import type { LabelProps } from './props'

const Label = ({ className, isDisabled, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      data-disabled={isDisabled}
      className={cn(
        // Base styles
        'text-text-primary flex items-center leading-none select-none',
        // Position
        '-translate-y-0.5 leading-none',
        // Disabled states
        'data-[disabled=true]:text-text-disabled data-[disabled=true]:pointer-events-none',
        'peer-disabled:text-text-disabled peer-disabled:pointer-events-none',
        'group-data-[disabled=true]:text-text-disabled group-data-[disabled=true]:pointer-events-none',
        className,
      )}
      {...props}
    />
  )
}
Label.displayName = 'Label'

export { Label }
