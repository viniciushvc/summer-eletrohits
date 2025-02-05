'use client'

import { SkipForward } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePlayerActions } from '@/store/app.store'

export const NextButton = ({ ...props }) => {
  const { nextSong } = usePlayerActions()

  return (
    <Button variant="ghost" size="icon" onClick={nextSong} {...props}>
      <SkipForward className="size-4" />
      <span className="sr-only">Next song</span>
    </Button>
  )
}
