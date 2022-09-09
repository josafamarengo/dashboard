import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
    label?: string;
    name: string;
    error?: FieldError;
    placeholder?: string;
    type?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraInput 
              name={name}
              id={name}
              label={label}
              focusBorderColor="yellow.400"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900"
              }}
              size="lg"
              ref={ref}
              {...rest}
            />

            { !!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            ) }
          </FormControl>
    );
}

export const Input = forwardRef(InputBase); // forwardRef is used to pass the ref to the input