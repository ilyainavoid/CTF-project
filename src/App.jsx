import './App.css'
import {Button, Flex, Input, Typography} from 'antd';
import {useEffect, useState} from "react";

const { Title } = Typography;
function App() {
  const [title, setTitle] = useState('');
  const secret = import.meta.env.VITE_KEY_PHRASE;
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setVisible] = useState(false);
  const titleDecrypted = `Privet!! Type ${secret} v formu`

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { encryptedText } = encryptWithRandomShift(titleDecrypted);
      setTitle(encryptedText);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function encryptWithRandomShift(text) {
    const shift = Math.floor(Math.random() * 25) + 1;

    const caesarShift = (char, shift) => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        let isUpperCase = code >= 65 && code <= 90;
        code += shift;
        if ((isUpperCase && code > 90) || (!isUpperCase && code > 122)) {
          code -= 26;
        } else if ((isUpperCase && code < 65) || (!isUpperCase && code < 97)) {
          code += 26;
        }

        return String.fromCharCode(code);
      }
      return char;
    };

    const encryptedText = text.split('').map(char => caesarShift(char, shift)).join('');

    return { encryptedText, shift };
  }

  const handleButtonClick = () => {
    console.log(secret, inputValue)
    if (secret === inputValue) {
      setVisible(true)
      console.log('here')
    }
    console.log(isVisible)
  }

  return (
      <Flex style={{padding: '50px'}} vertical>
        <Title>{title}</Title>
        <Input
            style={{width: '300px', marginBottom: '15px'}}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <Button style={{width: '300px'}} onClick={handleButtonClick}>LETS GO</Button>
        {isVisible && <img src="src/assets/CAT.jpg" alt="Photo" style={{ marginTop: '15px', maxWidth: '1000px' }} />}
      </Flex>
  )
}

export default App;
