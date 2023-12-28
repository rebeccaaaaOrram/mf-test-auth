import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import {
  Box,
  Flex,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface NewLoginProps {
  onLogin: (username: string, password: string) => void;
  logoSrc: string;
}

const NewLogin: React.FC<NewLoginProps> = ({ onLogin, logoSrc }) => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [load, setLoaded] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  const handleClick = () => setShow(!show)

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const resetSpinner = () => {
    setLoaded(true)
    setTimeout(() => {
      setLoaded(false)
    }, 5000)
  }

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onFinish()
    }
  }

  const onFinish = () => {
    try {
      resetSpinner()
      onLogin(user, password)
    } catch (error) {
      resetSpinner()
      setError(true)
    }
  }

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Image src={logoSrc} alt="logo" />
        </Box>
        <Box my={4} textAlign="left">
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            type="text"
            id="username"
            value={user}
            onChange={handleUserChange}
            onKeyPress={handleEnterKey}
          />
          <FormLabel mt={4} htmlFor="password">
            Password
          </FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyPress={handleEnterKey}
            />
            <InputRightElement width="3rem">
              <Button h="1.5rem" size="sm" onClick={handleClick}>
                {show ? <FiEyeOff /> : <FiEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button mt={4} colorScheme="teal" isLoading={load} onClick={onFinish}>
            NewLogin
          </Button>
          {error && (
            <Alert mt={4} status="error">
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>Invalid username or password.</AlertDescription>
            </Alert>
          )}
        </Box>
      </Box>
    </Flex>
  )
}

export { NewLogin }
