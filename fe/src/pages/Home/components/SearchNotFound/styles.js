import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: flex-start;

    span {
        margin-left: 24px;
        word-break: break-word;
        color: ${({ theme }) => theme.colors.gray[200]};
    }
`;
