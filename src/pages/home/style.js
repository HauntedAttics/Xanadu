import styled from 'styled-components'

export const HomeWrapper = styled.div`
  
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background: #000000;

    .container {
      width: 800px;

      h1 {
        margin: 0;
        letter-spacing: -2px;
        color: #f5f5f7;
      }
      span {
        padding-left: 25px;
        display: inline-block;
        font-size: 70px;
        overflow: hidden;
        position: relative;
        top: 6rem;
        animation: .3s swift-up ease-in-out forwards;

        i {
          font-style: normal;
          position: relative;
          top: 6rem;
          animation: .5s swift-up ease-in-out forwards;
        }

        @keyframes swift-up {
          to {
            top: 0rem
          }
        }
      }
      
      span:nth-of-type(1)  {
        animation-delay: .1s;
      }
      span:nth-of-type(2)  {
        animation-delay: .2s;
      }
      span:nth-of-type(3)  {
        animation-delay: .3s;
      }
      span:nth-of-type(4)  {
        animation-delay: .4s;
      }
      span:nth-of-type(5)  {
        animation-delay: .5s;
      }
      span:nth-of-type(6)  {
        animation-delay: .6s;
      }
      span:nth-of-type(7)  {
        animation-delay: .7s;
      }
      span:nth-of-type(8)  {
        animation-delay: .8s;
      }
      span:nth-of-type(9) {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        position: absolute;
        left: 46%;
        transform: translateY(600%);
        padding-left: 0px;
        animation-delay: 1.2s;
      }

      span:nth-of-type(1) i {
        animation-delay: .1s;
      }
      span:nth-of-type(2) i {
        animation-delay: .2s;
      }
      span:nth-of-type(3) i {
        animation-delay: .3s;
      }
      span:nth-of-type(4) i {
        animation-delay: .4s;
      }
      span:nth-of-type(5) i {
        animation-delay: .5s;
      }
      span:nth-of-type(6) i {
        animation-delay: .6s;
      }
      span:nth-of-type(7) i {
        animation-delay: .7s;
      }
      span:nth-of-type(8) i {
        animation-delay: .8s;
      }
      span:nth-of-type(9) i {
        animation-delay: 1.2s;
      }
    }
  }

  .text {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);

    h1 {
      font-size: 80px;
      color: white;
    }

    h2 {
      color: white;
    }
  }

  .wall {
    height: 1480px;
  }
`