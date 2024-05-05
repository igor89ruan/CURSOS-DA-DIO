import { InputContainer } from "./style-input";
const Input = ({value}) => {
    return (
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    )
}

export default Input;