'use client'

import { motion } from "motion/react"
import { ReactNode } from "react"

export function MotionDiv({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  )
}
