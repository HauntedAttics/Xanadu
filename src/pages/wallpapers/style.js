import styled from 'styled-components'

export const WallpapersWrapper = styled.div`

  padding: 120px 80px;
  text-align: center;
  box-sizing: border-box; 

  .grid {
    margin: 0 auto;
  }

  .grid:after {
    content: '';
    display: block;
    clear: both;
  }

  .grid-item {
    width: 330px;
    float: left;
    margin-bottom: 40px;    
  }

  .grid-item img {
    border-radius: 20px;
  }
  
`
