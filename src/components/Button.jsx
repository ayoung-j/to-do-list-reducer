import styled from "styled-components";

const ButtonStyle = styled.button`
    min-width: 68px;
    padding: 10px 16px;
    font-size: 1.6rem;
    font-weight: 500;
    background-color: #ddd;
    &:hover {
        background-color: #ccc;
    }
`;

const Button = ({ children, onClick }) => {
    return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
