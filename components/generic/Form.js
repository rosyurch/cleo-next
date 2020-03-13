import styled from 'styled-components';
import { typography } from 'styled-system';

const Form = styled.form`
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;
    ${typography};
`;

export default Form;
