import { useState } from 'react'

import ImageWithSpace from "../src/components/ImageWithSpace"
import Container from "../src/components/Containers"
import styled from "styled-components"
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
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCVC] = useState('')

  const handleForm = (event) => {
    event.preventDefault()
    console.log("Usuario mecheu")
  }
   return(
    <>      
        <Container>
        <Form onSubmit={handleForm}>          
          <Input label="Proprietário"  placeholder="Digite seu nome" onChange={(event) => {setName(event.target.value)}}/>
          <Input label="Numero do Cartão" placeholder="1111 1111 1111 1111" onChange={(event) => {setNumber(event.target.value)}}/>        
          <FlexInput>
            <Input label="Data Exp Mês"placeholder="Mes" onChange={(event) => {setMonth(event.target.value)}}/>
            <Input label="Data Exp Ano" placeholder="Ano" onChange={(event) => {setYear(event.target.value)}}/>
            <Input label="CVC" type="password" onChange={(event) => {setCVC(event.target.value)}}/>
          </FlexInput>
          <Button type="submit">Confirme</Button>
        </Form>
        </Container>

    </>
    
  )
}

export default FormCardPage