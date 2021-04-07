import { Flex, Box, Text, Avatar} from '@chakra-ui/react'

export function Profile( ) {
  return (
    <Flex align='center'>
    <Box mr='4' textAlign='right'>
      <Text>Igor Amantino</Text>
      <Text color='gray.300' fontSize='small'>Igor.amantino.dev@gmail.com</Text>
    </Box>

    <Avatar  mr='2' size='md' name='Igor Amantino' src='https://github.com/IgorGamantino.png' />
 </Flex>
  )
}
