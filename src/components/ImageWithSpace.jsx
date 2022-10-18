import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
`
const StyledImage = styled.div`
  background-image: url('/bg-main-desktop.png');  
  background-size: cover;
      
  width: 40%;
  height: 100vh;
`
const StyledContainer = styled.div`
         
    padding: 100px;
    max-width: 100%;
    max-heigth:100vh;
`

function ImageWithSpace({children}){
  return(
    <div>
        <StyledFlex>
          <StyledImage />
          <StyledContainer>
            {children}
          </StyledContainer>
        </StyledFlex>      
    </div>
  )
}

export default ImageWithSpace