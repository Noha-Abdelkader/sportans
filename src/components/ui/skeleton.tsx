import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-dark-200/50 min-h-[10px] min-w-[10px]", className)}
      {...props}
    />
  )
}

export { Skeleton }
