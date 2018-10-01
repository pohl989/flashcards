import styled from 'styled-components'


const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '1.5rem'
    case 'small':
      return '0.8rem'
    default:
      return '1rem'
  }
}

const textColor = (color) => {
  switch(color){
    case 'green':
      return '#827717'
    case 'orange':
     return '#ff5722'
    case 'blue':
      return '#0277bd'
    default:
      return '#ff6f00'
  }
}



export default styled.p`
  text-align: left;
  font-size: ${props => fontSize(props.fSize)} !important;
  color: ${props => textColor(props.fColor)} !important;
  text-decoration: underline;
  cursor: pointer;
`
