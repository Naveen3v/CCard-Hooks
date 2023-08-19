import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 100vh;
  background-size: cover;
`
export const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40%;
  background-color: #3b4b69;
  padding: 3%;
`
export const Line = styled.hr`
  width: 40%;
  margin-left: 30%;
  border: 3px solid #ffd773;
`
export const CCImageCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 250px;
  width: 30vw;
  background-size: cover;
  margin-top: 20%;
  border-radius: 20px;
`

export const CCInput = styled.p`
  height: 40px;
  width: 20vw;
  border: 0px;
  background-color: transparent;
  color: white;
  outline: white;
  margin-top: 15%;
  margin-left: 10%;
`

export const CCHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  text-align: start;
  margin-left: 3%;
`

export const CCInput2 = styled.p`
  height: 40px;
  width: 20vw;
  border: 0px;
  background-color: transparent;
  color: white;
  outline: white;
  margin-top: 5%;
  margin-left: 10%;
`

export const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 40%;
  background-color: white;

  margin-left: 10%;
  margin-top: 20%;
  border: 5px solid white;
`
export const CHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: white;
  text-align: center;
`
export const PHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: black;
`
export const PayInput = styled.input`
  height: 40px;
  width: 20vw;
  border: 3px solid black;

  color: black;
  outline: red;
  margin-top: 2%;
  margin-left: 1%;
`
export const PayInput2 = styled.input`
  height: 40px;
  width: 20vw;
  border: 3px solid black;

  color: black;
  outline: red;
  margin-top: 2%;
  margin-left: 1%;
`
