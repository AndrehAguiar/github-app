import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperUserImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 15px
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
    font-weight: 500;
    h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 900;
    }
    h3 {
        font-size: 1.2rem;
        color: darkgray;
    }
    h4 {
        font-size: 1.1rem;
        font-weight: bold;
    }
    span {      
        color: darkgray;  
    }
`;
    
export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 0 15px 15px 0;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div`
    height:100px;
    display: flex;
    margin-top: 10px;
    h3 {
        margin-right: 8px;
    }
    a {
        font-size: 1.1rem;
        color: darkblue;
        font-style:italic;
        text-decoration: none;
        &:hover{        
            color: blue;
        }
    }
`;