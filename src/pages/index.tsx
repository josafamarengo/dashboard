import { Flex, Button, Stack, Text, Icon, Box } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from "../components/Form/Input";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Head from "next/head";

type SignInFormData = {
  email: string;
  password: string;
};

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha não informada").min(6, 'Digite ao menos 6 letras ou números')
})

const Home = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const { errors } = formState;

  function handleSignIn(data: SignInFormData) {
    console.log(data);
  }

  return (
    <>
    <Head>
      <title>Login | DASH</title>
    </Head>
    <Flex 
      w="100vw" 
      h="100vh" 
      justify="center" 
      align="center"
      bgImage={`url("https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box 
        position="absolute"
        inset="0"
        bg="gray.900"
        opacity="0.9"
      />
      <Flex 
        as="form" 
        w="100%" 
        maxW={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8} 
        flexDir="column"
        zIndex="1"
        boxShadow={["lg", "md", "xl", "2xl", "3xl"]}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Text 
          fontSize="4xl" 
          fontWeight="bold" 
          letterSpacing="tight"
          mx="auto"
          mb="4"
        >
          DASH
        </Text>
        <Stack spacing="4">
          <Input 
            label="E-mail" 
            type="email"
            error={errors.email}
            {...register('email')}/>
          <Input 
            label="Senha" 
            type="password"
            error={errors.password}
            {...register("password")}/>
        </Stack>

        <Button 
          type="submit" 
          mt="6" 
          colorScheme="yellow" 
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
        <Text py="4" mx="auto">OU</Text>

        <Flex justify="center">
          <Button
            type="submit"
            colorScheme="facebook"
            size="lg"
            mr="2"
            borderRadius="full"
            w="50px"
            h="50px"
          >
            <Icon as={FaFacebookF} fontSize="24"/>
          </Button>
          <Button
            type="submit"
            bg="red.500"
            colorScheme="google"
            size="lg"
            ml="2"
            borderRadius="full"
            h="50px"
            w="50px"
          >
            <Icon as={FaGoogle} fontSize="24"/>
          </Button>
        </Flex>

        <Button
          type="submit"
          mt="6"
          color="gray.100"
          size="lg" 
          variant="none"
        >
          Criar conta
        </Button>

      </Flex>
    </Flex>
    </>
  )
}

export default Home
