import styled from "styled-components"

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%;
  height:100vh;  

`
const Cards= styled.div`
  display: flex;
  padding: 10px;  
  background-image: url('/bg-main-desktop.png');    
  background-repeat: no-repeat;
  background-size: cover;

  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 10px;
  padding: 0 0;
  width: 100%;
  height: 100vh;
`

const Card1 = styled.div`
  display:flex;
  background-image: url('/bg-card-front.png');

  margin: 0;
  padding:0;

`
const Card2 = styled.div`
  display:flex;
  background-image: url('/bg-card-back.png');
  background-repeat: no-repeat;
  background-size: 100%;
  
  width:100%;
  height:10vh;

`
const FormContainer = styled.div`
  display:flex;
  background-color: white;
  align-items: center;
  justify-content:center;
  padding: 0 350px;
  width: 100%;
  height: 100vh;
`


function Containers ({children}){
  return(
      <StyledFlex>
        <Cards>
          <Card1>XXXXXXXXXXX</Card1>
          <Card2>XXXXXXXXXXXX</Card2>
        </Cards>
        <FormContainer>
          {children}
        </FormContainer>
      </StyledFlex>
  )
}

export default Containers