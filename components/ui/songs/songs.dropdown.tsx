'use client'

import { EllipsisVertical } from 'lucide-react'
import { Button } from '../button'

import type { SongType } from '@/types/song'
import { useSong } from './songs.store'
import { SongsTypeMenu } from './songs.type-menu'

interface SongsDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Song data
   */
  data: SongType
}

const SongsDropdown = (props: SongsDropdownProps) => {
  const { data } = props

  const { isDropdownOpen, onChangeDropdown } = useSong()

  return (
    <SongsTypeMenu
      type="dropdown"
      data={data}
      open={isDropdownOpen}
      onOpenChange={onChangeDropdown}
    >
      <Button variant="ghost" size="icon">
        <EllipsisVertical className="size-5 text-muted-foreground" />
      </Button>
    </SongsTypeMenu>
  )
}

export default SongsDropdown
