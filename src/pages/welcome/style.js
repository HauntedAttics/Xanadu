import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000000;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 180px;

    background-image:
      linear-gradient(75deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 33%,
      rgba(255, 255, 255, 0) 66.67%,
      rgba(255, 255, 255, 0) 100%);
    background-size: 300% 100%;
    background-position-x: 100%;
    animation: 2s appear ease-in-out forwards;
    animation-delay: 1.2s;
      
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    
    
  }

  @keyframes appear {
    to {
      background-position-x: 0%;
    }
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 40px;
    color: #f5f5f7;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-size: 20px;
    text-align: center;

    background-image:
      linear-gradient(75deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 33.33%,
      rgba(255, 255, 255, 0) 66.67%,
      rgba(255, 255, 255, 0) 100%);
    background-size: 20000% 100%;
    background-position-x: 100%;

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    animation: 4s appear ease-in-out forwards;
    animation-delay: 1s;
  }

`