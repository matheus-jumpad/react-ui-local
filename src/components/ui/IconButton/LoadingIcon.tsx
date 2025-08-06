import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface LoadingIconProps {
  className?: string
}

export const LoadingIcon = ({ className }: LoadingIconProps) => {
  return <Loader2 className={cn('animate-spin', className)} />
}
