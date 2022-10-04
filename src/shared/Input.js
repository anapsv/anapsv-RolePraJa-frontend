import styled from "styled-components";

export default function Input({ type, placeholder, disabled, value, onChange, id }) {
    return (
        <StyledInput
            type={ type }
            placeholder={ placeholder }
            disabled={ disabled }
            value={ value }
            onChange={ onChange }
            required
            id={ id }
        />
    );
}

const StyledInput = styled.input`
    width: 75%;
    height: 36px;
    margin-bottom: 20px;
    background-color: #6363631c;
    color: #f08b08;
    padding-left: 2%;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    outline: none;
    font-weight: bold;
`