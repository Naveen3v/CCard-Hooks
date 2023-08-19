import {useState} from 'react'
import {
  MainContainer,
  CreditContainer,
  PayContainer,
  CHeading,
  PHeading,
  Line,
  CCImageCont,
  CCInput,
  CCHeading,
  CCInput2,
  PayInput,
  PayInput2,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')
  const [cardName, setName] = useState('')

  const changeName = event => setName(event.target.value)
  const changeNumber = event => setNumber(event.target.value)

  return (
    <MainContainer>
      <CreditContainer>
        <CHeading>CREDIT CARD</CHeading>
        <Line />
        <CCImageCont data-testid="creditCard">
          <CCInput>{cardNumber}</CCInput>
          <CCHeading>CARDHOLDER NAME</CCHeading>
          <CCInput2>{cardName} </CCInput2>
        </CCImageCont>
      </CreditContainer>
      <PayContainer>
        <PHeading>Payment Method</PHeading>
        <PayInput
          type="text"
          value={cardNumber}
          placeholder="Card Number"
          onChange={changeNumber}
        />
        <PayInput2
          type="text"
          value={cardName}
          placeholder="Cardholder Name"
          onChange={changeName}
        />
      </PayContainer>
    </MainContainer>
  )
}

export default CreditCard
