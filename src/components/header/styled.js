import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        height: 44px;
        padding:8px 16px;
    }

    button {
        border-radius: 4px;
        background-color: #000;
        padding: 8px 16px;
        margin: 0 8px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        font-weight: bold;
        color:white;
        text-transform: uppercase;
        font-size:0.9rem;

        &:hover {
            background-color: #ccc;
            color:black;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5)
        }

        &:active {
            background-color: #bbb;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.5)
        }
    }
`;