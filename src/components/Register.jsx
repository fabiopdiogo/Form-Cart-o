import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Containers from "./Containers"

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 20px 0;
  gap: 20px;
`
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
const Check = styled.img`
  size: 0px;
`

function Register({handleSubmit,register,errors,reg}){
  return(           
      <div>      
        {
          reg === 0 &&
              <>
                <Form onSubmit={handleSubmit}>          
                      <Input label="Proprietário" name="name" placeholder="Digite seu nome" {...register('name')} error={errors.name} />
                      <Input label="Numero do Cartão" name="number" placeholder="1111 1111 1111 1111" {...register('number')} error={errors.number}/>        
                    <FlexInput>
                      <Input label="Data Exp Mês" name="month" placeholder="Mes" {...register('month')} error={errors.month}/>
                      <Input label="Data Exp Ano" name="year" placeholder="Ano" {...register('year')} error={errors.year}/>
                      <Input label="CVC" name="cvc" {...register('cvc')} error={errors.cvc}/>
                    </FlexInput>
                    <Button type="submit">Confirme</Button>
                </Form>
              </>
        }
        {
          reg !==0 &&
          <>
              <FormContainer>
                <Check src={`icon-complete.svg`}></Check>
                <p>OBRIGADO !</p>
                <p>Adicionamos os detalhes no seu cartão</p>
              </FormContainer>                       
          </>          
        }    
         
      </div>
   
  )
}

export default Register