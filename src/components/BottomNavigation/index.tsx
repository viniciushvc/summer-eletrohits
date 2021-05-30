import { useRouter } from 'next/router'

import { FiHeart, FiHome, FiSearch, FiUser } from 'react-icons/fi'

import { chakra, useColorModeValue } from '@chakra-ui/system'
import { Flex } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'

const BottomNavigation = () => {
  const { push, pathname } = useRouter()

  const paths = [
    {
      href: '/',
      icon: FiHome
    },
    {
      href: '/search',
      icon: FiSearch
    },
    {
      href: '/queue',
      icon: FiHeart
    },
    {
      href: '/about',
      icon: FiUser
    }
  ]

  return (
    <Flex
      pos="fixed"
      h="50px"
      bg={useColorModeValue('gray.50', 'gray.900')}
      bottom="0"
      left="0"
      right="0"
      align="center"
      justify="space-between"
    >
      {paths.map((path) => (
        <Flex
          key={path.href}
          onClick={() => push(path.href)}
          justify="center"
          align="center"
          flex="1 1 0%"
          h="full"
          sx={{
            '&>svg': {
              ...(pathname.includes(path.href) && { color: 'primary' })
            }
          }}
        >
          <Icon as={path.icon} boxSize="20px" />
        </Flex>
      ))}
    </Flex>
  )
}

export default chakra(BottomNavigation)
