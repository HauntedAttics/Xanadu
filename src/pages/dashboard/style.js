import styled from 'styled-components'

export const DashboardWrapper = styled.div`

  display: flex;
  justify-content: space-around;
  height: 100vh;
  background: #000000;
  padding: 100px 100px 0 100px;

  .db-left {
    display: flex;
    flex-direction: column;
  }
  .db-mid {
    display: flex;
  }
  .db-right {
    display: flex;
    align-items: center;
  }

  #chart1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 80%;
  }
  #chart2 {
    display: flex;
    width: 400px;
    height: 100%;
  }
  #chart3 {
    display: flex;
    width: 400px;
    height: 60%;
  }
  #chart4 {
    display: flex;
    width: 400px;
    height: 40%;
  }
`
