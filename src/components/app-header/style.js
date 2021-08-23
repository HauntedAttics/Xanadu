import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  box-shadow: 0 0 8px;
  display: flex;
  top: 0;
  font-size: 20px;
  position: fixed;
  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  backdrop-filter: saturate(180%) blur(20px);

  .content {
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
    .logo {
    font-size: x-large;
  }
  .logo:hover {
    text-decoration: none;
  }

`

export const HeaderRight = styled.div`

 display: flex;

  .select-list {
    display: flex;
    line-height: 80px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 40px;
        color: #ccc;
      }
      &:hover a {
        color: #fff;
        text-decoration: none;
      }
      a.active {
        color: gray;
      }
    }
  }
`