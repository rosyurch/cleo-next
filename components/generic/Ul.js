import styled from 'styled-components';
import { space, layout, border, flexbox } from 'styled-system';

const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    ${space};
    ${layout};
    ${border};
    ${flexbox}
`;

export default Ul;
