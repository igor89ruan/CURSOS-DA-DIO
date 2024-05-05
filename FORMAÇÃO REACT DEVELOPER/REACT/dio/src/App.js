import { Container, Content, Row } from "./style";
import Input from "./components/input/input";
import Button from "./components/button/button";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  const handleaddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }else{
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  const handleSubNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }else{
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  const handleMultiNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    }else{
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum)); 
    }
  }

  const handleDivNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      console.log(Number(firstNumber), Number(currentNumber))
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
    }
  }


  const handEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case 'x':
          handleMultiNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  }
  return ( <div className="App">

    <Container>
        <Content>
          <Input  value={currentNumber} />
          <Row>
              <Button label={"|"} />
              <Button label={"/"} onClick={() => handleDivNumbers()} />
              <Button label={"C"} onClick={() => handleOnClear()}/>
              <Button label={"x"} onClick={() => handleMultiNumbers()} />
          </Row>
          <Row>
              <Button label={"7"} onClick={() => handleaddNumber('7')} />
              <Button label={"8"} onClick={() => handleaddNumber('8')} />
              <Button label={"9"} onClick={() => handleaddNumber('9')} />
              <Button label={"-"} onClick={() => handleSubNumbers()} />
          </Row>
          <Row>
              <Button label={"4"} onClick={() => handleaddNumber('4')} />
              <Button label={"5"} onClick={() => handleaddNumber('5')} />
              <Button label={"6"} onClick={() => handleaddNumber('6')} />
              <Button label={"+"} onClick={() => handleSumNumbers()} />
          </Row>
          <Row>
              <Button label={"1"} onClick={() => handleaddNumber('1')} />
              <Button label={"2"} onClick={() => handleaddNumber('2')} />
              <Button label={"3"} onClick={() => handleaddNumber('3')} />
              <Button label={"="} onClick={() => handEquals()} />
          </Row>
        </Content>
    </Container>

    </div> );
}

export default App;
