import { useState } from 'react'

import Container from "../src/components/Containers"
import styled from "styled-components"
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { formCardSchema } from '../modules/post/user.schema'

import Button from "../src/components/Button"
import Input from "../src/components/Input"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`
const FlexInput = styled.div`
  display: flex;
  flex-direction: row
  gap: 5px;
`

function FormCardPage(){
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(formCardSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }

  console.log(errors)

   return(
    <>      
        <Container>
        <Form onSubmit={handleSubmit(handleForm)}>          
          <Input label="Proprietário" name="name" placeholder="Digite seu nome" {...register('name')}/>
          <Input label="Numero do Cartão" name="number" placeholder="1111 1111 1111 1111" {...register('number')}/>        
          <FlexInput>
            <Input label="Data Exp Mês" name="month" placeholder="Mes" {...register('month')}/>
            <Input label="Data Exp Ano" name="year" placeholder="Ano" {...register('year')}/>
            <Input label="CVC" name="cvc" {...register('cvc')}/>
          </FlexInput>
          <Button type="submit">Confirme</Button>
        </Form>
        </Container>

    </>
    
  )
}

export default FormCardPage