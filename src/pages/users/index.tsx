import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr,Td, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine,  } from "react-icons/ri";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

     <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <SideBar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg'fontWeight='normal'>Usuários</Heading>

            <Button as='a' size='sm' fontSize='small' colorScheme='pink'
            leftIcon={<Icon as={RiAddLine} fontSize='20' />}>Criar novo</Button>

          </Flex>

        <Table colorScheme='whiteAlpha'>
          <Thead>
            <Tr>
              <Th px={['3', '4','6']} color='gray.300' width='8'>
                <Checkbox  colorScheme='pink'/>
              </Th>

              <Th>Usuário</Th>
                {isWideVersion && <Th>Cada de Cadastro</Th>}
              <Th w='8'></Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td px={['3', '4','6']}>
                <Checkbox  colorScheme='pink'/>
              </Td>

              <Td>
                <Box>
                  <Text fontWeight='bold'>Igor amantino</Text>
                  <Text fontSize='sm' color='gray.300'>Igor.amantino.dev@gmail.com</Text>
                </Box>
              </Td>
              { isWideVersion && <Td>03 de Março, 2021</Td>}
              <Td>
              { isWideVersion &&  <Button as='a' size='sm' fontSize='small' colorScheme='cyan'
                leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>{ isWideVersion && 'Editar'}</Button>}
             </Td>
            </Tr>

            <Tr>
              <Td px={['3', '4','6']}>
                <Checkbox  colorScheme='pink'/>
              </Td>

              <Td>
                <Box>
                  <Text fontWeight='bold'>Igor amantino</Text>
                  <Text fontSize='sm' color='gray.300'>Igor.amantino.dev@gmail.com</Text>
                </Box>
              </Td>
              { isWideVersion && <Td>03 de Março, 2021</Td>}
              <Td>
              { isWideVersion &&  <Button as='a' size='sm' fontSize='small' colorScheme='cyan'
                leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>{ isWideVersion && 'Editar'}</Button>}
             </Td>
            </Tr>
          </Tbody>
       </Table>

          <Pagination />
        </Box>
     </Flex>
    </Box>
  );
}
