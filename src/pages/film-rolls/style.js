import styled from 'styled-components'

export const FilmRollsWrappers = styled.div`

  padding: 60px 100px;
  text-align: center;
  background: #000000;

  h1 {
    font-size: 40px;
    color: #f5f5f7;
  }
  h2 {
    color: #a1a1a6;
  }

  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 600px;
    height: 450px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    border-radius: 20px;
  }

`