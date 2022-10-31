import { useState } from 'react'

import Container from "../src/components/Containers"
import styled from "styled-components"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { formCardSchema } from '../modules/post/user.schema'

import Button from "../src/components/Button"
import Input from "../src/components/Input"

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 20px 0;
  gap: 20px;
`
const FlexForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0%;
  margin-bottom: 20px;

  @media (max-width: 705px ){
    margin-bottom: 80px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;  
  width: 50%;
`

const FlexInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;  
`

const Check = styled.img`
  max-width: 50%;
  max-height: 100%;
  margin-left: 25%;
`

function FormCardPage(){
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: joiResolver(formCardSchema)
  })
  const [reg,setReg] = useState(0)
  const [name,setName] = useState('Nome') 
  const [number,setNumber] = useState('00000000000000') 
  const [month,setMonth] = useState('00') 
  const [year,setYear] = useState('00') 
  const [cvc,setCVC] = useState('000') 
  
  const handleForm = (data) =>{    
    setReg(1);    
    setNumber(data.number)    
    console.log(number)    
  }

  const updateCard = (event) =>{        
    setNumber(event.target.value)    
    console.log(number)    
  }

   return(  
    <Container name={name} number={number} month={month} year={year} cvc={cvc}>
          <div>                  
            {
              reg === 0 &&
                  <FlexForm>
                    <Form onSubmit={handleSubmit(handleForm)}>          
                          <Input label="Proprietário" name="name" placeholder="Digite seu nome" {...register('name')} error={errors.name} onChange={(event) => {setName(event.target.value)}}/>
                          <Input label="Numero do Cartão" name="number" placeholder="1111 1111 1111 1111" {...register('number')} error={errors.number} onChange={(event) => {setNumber(event.target.value)}} />        
                        <FlexInput>
                          <Input label="Data Exp Mês" name="month" placeholder="Mes" {...register('month')} error={errors.month} onChange={(event) => {setMonth(event.target.value)}}/>
                          <Input label="Data Exp Ano" name="year" placeholder="Ano" {...register('year')} error={errors.year} onChange={(event) => {setYear(event.target.value)}}/>
                          <Input label="CVC" name="cvc" {...register('cvc')} error={errors.cvc} onChange={(event) => {setCVC(event.target.value)}}/>
                        </FlexInput>
                        <Button type="submit">Confirme</Button>
                    </Form>
                  </FlexForm>
            }
            {
              reg !==0 &&
              <>
                  <CheckContainer>
                    <Check src={`icon-complete.svg`}></Check>
                    <p>OBRIGADO !</p>
                    <p>Adicionamos os detalhes no seu cartão</p>
                  </CheckContainer>                       
              </>          
            }          
        </div>
     </Container>
  )
}

export default FormCardPage