import { useState } from 'react'

import Container from "../src/components/Containers"
import styled from "styled-components"
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { formCardSchema } from '../modules/post/user.schema'

import Button from "../src/components/Button"
import Input from "../src/components/Input"
import Register from "../src/components/Register"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`
const FlexInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

function FormCardPage(){
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: joiResolver(formCardSchema)
  })
  const [reg,setReg] = useState(0)

  const handleForm = (data) =>{
    console.log(data)
    console.log(reg)
    setReg(1)
    console.log(reg)
  }

   return(
        <Container>              
          <Register handleSubmit={handleSubmit(handleForm)} register={register} errors={errors} reg={reg}/>
        </Container>
  )
}

export default FormCardPage