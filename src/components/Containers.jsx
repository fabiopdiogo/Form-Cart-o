import styled from "styled-components"

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-around;
  width: 100%;
  height:100vh;  
  background-image: url('/bg-main-desktop.png');    
  background-repeat: no-repeat;
  background-size:40%;
  
  @media (max-width: 1200px){
    flex-direction: column;
    background-size:40%;
    width: 100%;
     
  }
`
const Cards= styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const DivCard1 = styled.div`
  display: inline-block;
  position: relative;
`
const P1 = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  top:135px;
  right:80px;
`
const P2 = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  bottom:13px;
  left:10px;
`
const P3 = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  bottom:13px;
  right:10px;
`
const CardLogo = styled.img`
  position: absolute;
  top:13px;
  left:20px;
`

const DivCard2 = styled.div`
  display: inline-block;
  position: relative;
`

const Card1 = styled.img`
  display:flex;
  background-image: url('/bg-card-front.png');

  width: auto;
  height: auto;
`
const Card2 = styled.img`
  display:flex;
  background-image: url('/bg-card-back.png');

  width: auto;
  height: auto;
`
const CVC = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  top:100px;
  right:50px;
`

function Containers ({number,name,month,year,cvc,children}){
  return(
      <StyledFlex>
          <Cards>                         
            <DivCard1>
              <Card1 src={'/bg-card-front.png'}/>
              <P1>{number}</P1>
              <P2>{name}</P2>   
              <P3>{month}/{year}</P3>
              <CardLogo src="card-logo.svg"></CardLogo>
            </DivCard1>      
            <DivCard2>
              <Card2 src={'/bg-card-back.png'}/>      
                <CVC>{cvc}</CVC>
            </DivCard2>               
          </Cards>                     
          {children}        
      </StyledFlex>
  )
}

export default Containers