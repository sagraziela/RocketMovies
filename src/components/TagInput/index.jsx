import { Container } from "./styles";
import { FiPlus, FiX} from "react-icons/fi"
import { useState } from "react";

export function TagInput({ value, isNew, onClick, ...rest }) {

    return (
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest} 
            />

            <button
            id="buttontag"
            type="button"
            onClick={onClick}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}