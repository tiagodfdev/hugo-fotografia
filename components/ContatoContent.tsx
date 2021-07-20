import { FormControl, Input, Flex, Text, Textarea, Button, Heading} from '@chakra-ui/core'
import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';


let schema = yup.object().shape({
  name: yup.string().required('Digite o nome.').max(30, "O nome não deve ser tão extenso."),
  email: yup.string().email('E-mail inválido.').required("Digite o E-mail."),
  phone: yup.string()
    
    .required("Digite o telefone.")
    .min(8,"O telefone deve conter no mínimo 8 dígitos."),
  place: yup.string().max(40, "O nome do local não deve ser tão extenso."),
  city: yup.string().max(40, "O nome da cidade não deve ser tão extenso."),
  message: yup.string().max(400, "Favor resumir a mensagem até 400 caracteres." )
    

});

export default function ContatoContent() {

  const [submitState, setSubmitState] = React.useState(false)
  
  const {register, handleSubmit, errors,} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
   setSubmitState(true)
   const handlePress = async () => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
     },
      body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, date: data.date , place: data.place, city: data.city, message: data.message })
    })
    if(res.status>200 && res.status<299){
      setSubmitState(false)
      alert('Formulário enviado, em breve entrarei em contato.')
    }
    if(res.status>=300){
      setSubmitState(false)
      alert('Serviço de e-mail temporariamente fora do ar, favor entrar em contato via WhatsApp ou Instagram')
    }
  }
  handlePress()
}
  return (
    <motion.div className="framerFlex" initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .4
        }
      },
    }}>
    <Flex flexDirection="column" w="80%">
        <Heading d="flex" as='h1' fontFamily="Fixture" fontSize="2em" letterSpacing="0.2em" fontWeight="400" color="var(--color-text-sobre-h1)" >
          FALA AÍ
        </Heading>
        <Heading 
          d="flex" 
          as='h2' 
          fontFamily="Fixture" 
          fontSize="1.5em" 
          letterSpacing="0.2em" 
          fontWeight="500" 
          color="var(--color-text-sobre-h2)" 
          mb="1rem"
        >
          DEIXE SEUS DADOS QUE ENTRAREI EM CONTATO
        </Heading>
     <form onSubmit={handleSubmit(onSubmit)} >
      <FormControl id="name">
        <Input
          name="name"
          ref={register}
          fontFamily="Fixture" 
          letterSpacing="0.2em" 
          fontSize={{base: "1.3rem", md: "1.2rem"}} 
          fontWeight="400" 
          color="var(--color-text-list)"  
          placeholder="NOME*"
          focusBorderColor="#556A7B"
          _focus={{borderBottomWidth:"0.2rem"}}
          borderRadius="0"
          borderColor="#556A7B"
          _hover={{borderColor: "#556A7B"}}
          borderWidth="0.15rem"
          mb="0.5rem"
        />
        <Text
          fontFamily="Fixture" 
          letterSpacing="0.2em" 
          fontSize={{base: "0.8rem", md: "0.8rem"}} 
          fontWeight="400" 
          color="var(--color-contato-error)" 
        >
          {errors.name?.message}
        </Text>
      </FormControl>
      <FormControl id="email">
        <Input
          name="email"
          ref={register}
          fontFamily="Fixture" 
          letterSpacing="0.2em" 
          fontSize={{base: "1.3rem", md: "1.2rem"}} 
          fontWeight="400" 
          color="var(--color-text-list)" 
          placeholder="EMAIL*"
          focusBorderColor="#556A7B"
          _focus={{borderBottomWidth:"0.2rem"}}
          borderRadius="0"
          borderColor="#556A7B"
          _hover={{borderColor: "#556A7B"}}
          borderWidth="0.15rem"
          mb="0.5rem"
        />
        <Text 
          fontFamily="Fixture" 
          letterSpacing="0.2em" 
          fontSize={{base: "0.8rem", md: "0.8rem"}} 
          fontWeight="400" 
          color="var(--color-contato-error)" 
        >
          {errors.email?.message}
        </Text>
      </FormControl>
      <Flex flexDirection="row" mb="0.5rem">
        <FormControl id="phone" mr="0.25rem">
          <Input
            name="phone"
            ref={register}
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "1.3rem", md: "1.2rem"}} 
            fontWeight="400" 
            color="var(--color-text-list)"  
            placeholder="TELEFONE*"
            focusBorderColor="#556A7B"
            _focus={{borderBottomWidth:"0.2rem"}}
            borderRadius="0"
            borderColor="#556A7B"
            _hover={{borderColor: "#556A7B"}}
            borderWidth="0.15rem"
          />
          <Text
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "0.8rem", md: "0.8rem"}} 
            fontWeight="400" 
            color="var(--color-contato-error)" 
          >
            {errors.phone?.message}
          </Text>
        </FormControl>
        <FormControl id="date" ml="0.25rem">
          <Input
            name="date"
            type="text"
            id="date"
            onFocus={e => (e.target.type = "date")}
            onBlur={e => (e.target.type = "text")}
            ref={register}
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "1.3rem", md: "1.2rem"}} 
            fontWeight="400" 
            color="var(--color-text-list)" 
            placeholder="DATA DO EVENTO"
            focusBorderColor="#556A7B"
            _focus={{borderBottomWidth:"0.2rem"}}
            borderRadius="0"
            borderColor="#556A7B"
            _hover={{borderColor: "#556A7B"}}
            borderWidth="0.15rem"
            
          />
          <Text 
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "0.8rem", md: "0.8rem"}} 
            fontWeight="400" 
            color="var(--color-contato-error)" 
          >
            {errors.date?.message}
          </Text>
        </FormControl>
      </Flex>
      <Flex flexDirection="row" mb="0.5rem">
        <FormControl id="phone" mr="0.25rem">
          <Input
            name="city"
            ref={register}
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "1.3rem", md: "1.2rem"}} 
            fontWeight="400" 
            color="var(--color-text-list)"  
            placeholder="CIDADE"
            focusBorderColor="#556A7B"
            _focus={{borderBottomWidth:"0.2rem"}}
            borderRadius="0"
            borderColor="#556A7B"
            _hover={{borderColor: "#556A7B"}}
            borderWidth="0.15rem"
          />
          <Text
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "0.8rem", md: "0.8rem"}} 
            fontWeight="400" 
            color="var(--color-contato-error)" 
          >
            {errors.city?.message}
          </Text>
        </FormControl>
        <FormControl id="place" ml="0.25rem">
          <Input
            name="place"
            ref={register}
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "1.3rem", md: "1.2rem"}} 
            fontWeight="400" 
            color="var(--color-text-list)" 
            placeholder="LOCAL DO EVENTO"
            focusBorderColor="#556A7B"
            _focus={{borderBottomWidth:"0.2rem"}}
            borderRadius="0"
            borderColor="#556A7B"
            _hover={{borderColor: "#556A7B"}}
            borderWidth="0.15rem"
          />
          <Text 
            fontFamily="Fixture" 
            letterSpacing="0.2em" 
            fontSize={{base: "0.8rem", md: "0.8rem"}} 
            fontWeight="400" 
            color="var(--color-contato-error)" 
          >
            {errors.place?.message}
          </Text>
        </FormControl>
      </Flex>
      <FormControl id="name">
        <Textarea
          name="message"
          ref={register}
          fontFamily="Fixture" 
          letterSpacing="0.2em" 
          fontSize={{base: "1.3rem", md: "1.2rem"}} 
          fontWeight="400" 
          minH="5rem"
          color="var(--color-text-list)"  
          placeholder="MENSAGEM"
          focusBorderColor="#556A7B"
          _focus={{borderBottomWidth:"0.2rem"}}
          borderRadius="0"
          borderColor="#556A7B"
          _hover={{borderColor: "#556A7B"}}
          borderWidth="0.15rem"
          mb="0.5rem"
          textAlign="start"
          justifyContent="start"
        />
        <Text
          fontFamily="Fixture" 
          letterSpacing="0.2em" 
          fontSize={{base: "0.8rem", md: "0.8rem"}} 
          fontWeight="400" 
          color="var(--color-contato-error)" 
        >
          {errors.message?.message}
        </Text>
      </FormControl>
      <Button  
        mt={4}
        backgroundColor="#556A7B"
        color="white"
        borderRadius="0"
        isLoading={submitState}
        loadingText="Enviando..."
        type="submit"
        _hover={{backgroundColor:"#718697"}}
      >
        ENVIAR
      </Button>
     </form>
    </Flex>
    </motion.div>
  )
  }
