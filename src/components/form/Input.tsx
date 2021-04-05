import { FormControl, FormLabel,Input as InputChakra, InputProps as InputPropsChakra } from '@chakra-ui/react'

interface InputProps extends InputPropsChakra {
  name: string;
  label?: string;
}

export function Input({name, label, ...rest }: InputProps) {
  return (
    <FormControl {...rest}>

    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

    <InputChakra id={name} name={name}  focusBorderColor='pink.500' bg='gray.900'
    variant='filled' _hover={{ bg: 'gray.900'}} size='lg'/>

  </FormControl>
  )
}
