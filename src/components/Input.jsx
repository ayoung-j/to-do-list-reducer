import styled from "styled-components";

const InputStyle = styled.input`
    width: 100%;
    padding: 16px;
    font-size: 1.6rem;
    border: 1px solid #ccc;
    transition: all ease 0.3s;
    &:hover,
    &:focus {
        border-color: #333;
    }
`;

const Input = ({ value, placeholder, onChange }) => {
    return <InputStyle value={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
