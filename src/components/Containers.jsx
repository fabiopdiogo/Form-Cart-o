import styled from "styled-components"

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-around;
  width: 100%;
  height:100vh;  
  background-image: url('/bg-main-desktop.png');    
  background-repeat: no-repeat;
  background-size:30% 100%;
  
  @media (max-width: 1281px){
    flex-direction: column;
    background-size: 100% 50%;
  }  
  
`
const Cards= styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1281px){
    flex-direction: column-reverse;    
    margin-top: 200px;
  }
  @media (max-width: 705px){   
    margin-bottom: 30px;
  }
`

const Card1 = styled.img`
  display:flex;
  background-image: url('/bg-card-front.png');
  width: auto;
  height: auto;  
  margin-left: 200px;

  @media (max-width: 1281px){
    max-width:400px;
    max-height:350px;
    width: auto;
    height: auto;      
    margin-bottom: 100px;
    margin-left: 0px;    
  }
  @media (max-width: 705px){
    max-width:300px;
    max-height:250px;
    width: auto;
    height: auto;      
    margin-bottom: 0px;
  }
`
const Card2 = styled.img`
  display:flex;
  background-image: url('/bg-card-back.png');
  width: auto;
  height: auto;
  margin-left: 300px;

  @media (max-width: 1281px){
    max-width:400px;
    max-height:350px;    
    width: auto;
    height: auto; 
    margin-top: 40px;
  }

  @media (max-width: 705px){
    max-width:300px;
    max-height:250px;
    width: auto;
    height: auto;      
    margin: auto;
  }
`

const Number = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  top:135px;
  right:180px;

  @media (max-width: 1281px){
    top:105px;
    left:60px;
  }
  @media (max-width: 705px){
    font-size:20px;
    top:85px;
    left:60px;
  }
`
const Name = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  bottom:13px;
  left:230px;

  @media (max-width: 1281px){
    font-size:20px;
    bottom:115px;
    left:30px;
  }
  @media (max-width: 705px){
    font-size:20px;
    bottom:15px;
    left:30px;
  }
`
const Date = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  bottom:13px;
  right:120px;

  @media (max-width: 1281px){
    font-size:20px;
    bottom:115px;
    left:300px;
  }

  @media (max-width: 705px){
    font-size:20px;
    bottom:15px;
    left:220px;
  }
`
const CardLogo = styled.img`
  position: absolute;
  top:13px;
  left:220px;

  @media (max-width: 1281px){
    font-size:20px;
    top:13px;
    left:20px;
  }

`
const DivCard1 = styled.div`
  display: inline-block;
  position: relative;
`

const DivCard2 = styled.div`
  display: inline-block;
  position: relative;
`

const CVC = styled.p`
  position: absolute;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size:30px;
  top:100px;
  right:50px;

  @media (max-width: 1281px){
    top:130px;
    right:50px;
  }
  @media (max-width: 705px){
    top:65px;
    right:30px;
    font-size:25px;
  }
`

function Containers ({number,name,month,year,cvc,children}){
  return(
      <StyledFlex>
          <Cards>                         
            <DivCard1>
              <Card1 src={'/bg-card-front.png'}/>
              <Number>{number}</Number>
              <Name>{name}</Name>   
              <Date>{month}/{year}</Date>
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