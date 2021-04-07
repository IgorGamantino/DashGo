import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from '../Header/Logo'
import { NotificationsNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export function Header() {
  const { onOpen  } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
    as = 'header'
    w='100%'
    maxW={1480}
    h='20'
    mx='auto'
    mt='4'
    px='6'
    align='center'
    >
      {!isWideVersion && (
      <IconButton
      fontSize='24'
      variant='unstyled'
      mr='3'
      aria-label='Open Navigation'
      onClick={onOpen}
      icon={<Icon as={RiMenuLine}  />}
      />)}

      <Logo />

     { isWideVersion && <SearchBox />}

     <Flex
        align='center'
        ml='auto'
      >
        <NotificationsNav />

        <Profile showProfile={isWideVersion}/>
      </Flex>
    </Flex>
  )
}
