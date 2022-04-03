import { usePlayer } from 'contexts/player'

import { MdRepeat } from 'react-icons/md'

import { IconButton } from '@chakra-ui/react'

export const Repeat = ({ ...props }) => {
  const { isLooping, toggleLoop } = usePlayer()

  return (
    <IconButton
      icon={<MdRepeat />}
      variant={isLooping ? 'solid' : 'ghost'}
      aria-label="Repeat song"
      onClick={toggleLoop}
      {...props}
    />
  )
}
