'use client'

import {
  ContextMenu as CM,
  ContextMenuContent as CMC,
  ContextMenuItem as CMI,
  ContextMenuTrigger as CMT,
} from '@/components/ui/context-menu'
import {
  Dropdown as D,
  DropdownContent as DC,
  DropdownItem as DI,
  DropdownTrigger as DT,
} from '@/components/ui/dropdown'
import { useAddQueue } from '@/hooks/use-add-queue'
import { useLike } from '@/hooks/use-like'
import { ListPlus, ListStart, ListX } from 'lucide-react'

interface SongsTypeMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Song data
   */
  data: SongType
  /**
   * Change render type
   */
  type: 'dropdown' | 'context-menu'
}

export const SongsTypeMenu = (props: SongsTypeMenuProps) => {
  const { data, type, children } = props

  const { handleLike, label: labelLike, LikeIcon } = useLike(data)

  const { handleAddToQueue, handleRemoveFromQueue, isInQueue } =
    useAddQueue(data)

  const Component = type === 'dropdown' ? D : CM
  const ComponentTrigger = type === 'dropdown' ? DT : CMT
  const ComponentContent = type === 'dropdown' ? DC : CMC
  const ComponentItem = type === 'dropdown' ? DI : CMI

  return (
    <Component modal={false}>
      <ComponentTrigger asChild>{children}</ComponentTrigger>

      <ComponentContent className="space-y-2">
        <ComponentItem className="gap-2" onClick={handleLike}>
          <LikeIcon />

          {labelLike}
        </ComponentItem>

        <ComponentItem
          className="gap-2"
          onClick={() => handleAddToQueue('next')}
        >
          <ListStart className="size-4" />
          Play next
        </ComponentItem>

        <ComponentItem
          className="gap-2"
          onClick={() => handleAddToQueue('last')}
        >
          <ListPlus className="size-4" />
          Add to queue
        </ComponentItem>

        {isInQueue && (
          <ComponentItem className="gap-2" onClick={handleRemoveFromQueue}>
            <ListX className="size-4" />
            Remove from queue
          </ComponentItem>
        )}
      </ComponentContent>
    </Component>
  )
}
