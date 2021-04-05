
import { Flex } from '@chakra-ui/layout'
import {Header} from '../components/form/Header'
import { SideBar } from '../components/form/SideBar'

export default function Dashboard() {
  return (
    <Flex
     direction='column'
     h='100vh'
    >
     <Header />

     <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <SideBar />
     </Flex>

    </Flex>
  )
}
