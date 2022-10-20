import styled from 'styled-components'
const WIDTH_BREAK = '700px'
const StyledFlex = styled.div`
  display: flex;
`
const StyledImage = styled.div`
  background-image: url('/bg-main-desktop.png');
  background-repeat: no-repeat;
  background-size: cover;

  width: 35%;
  height: 100vh;

  @media(max-width: ${WIDTH_BREAK}){
    display: flex;
    flex-direction: column;
    background-image: url('/bg-main-mobile.png');
    width: 100%;
    height: 35vh;   
  }
`

const StyledContainer = styled.div`

`

function ImageWithSpace({children}){
  return(
    <div>              
        <StyledImage>
          {children}
        </StyledImage>           
    </div>
  )
}


export default ImageWithSpace