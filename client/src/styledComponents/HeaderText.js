import styled from 'styled-components'


const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '3rem'
    case 'small':
      return '1rem'
    default:
      return '1.5rem'
  }
}

const backgroundColor = (color) => {
  switch(color){
    case 'green':
      return '#827717'
    case 'orange':
     return '#ff5722'
    default:
      return '#ff6f00'
  }
}

const subHeader = (sub=false) => {
  if(sub){
    return "0px 0px 15px 0px"
  } else {
    return "15px 0px 5px 0px"
  }
}

export default styled.h1`
  margin: ${props => subHeader(props.sub)};
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;
  background-color: ${props => backgroundColor(props.bColor)} !important;
`
