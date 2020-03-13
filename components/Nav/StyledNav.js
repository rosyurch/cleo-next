import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    font-size: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bg};
`;

export default Nav;
