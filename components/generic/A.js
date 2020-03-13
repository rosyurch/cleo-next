import styled from 'styled-components';

const A = styled.a`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
`;

export default A;
