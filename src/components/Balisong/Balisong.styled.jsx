import styled from '@emotion/styled';

export const Card = styled.div`
    background: #1d1f1f;
    color: #c3e1f1;
    border: 1px solid rgba(255, 80, 80, 0.35);
    border-radius: 14px;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.25s ease;

    :hover {
    transform: scale(1.03);
    border: rgb(119, 119, 202) 1px solid;

    svg {   
    margin-bottom: -8px;
    margin-right: 5px;
    color: #9b25fc; 
}

`