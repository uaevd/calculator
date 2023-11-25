import styled from '@emotion/styled';

import { Label } from 'components/Label';

const Container = styled.div`
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.01);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
    padding: 16px 16px;
    overflow: hidden;
    width: 344px;
`;

export const Display = () => (
    <Container>
        <Label text="Label" fontSize="12px" color="#939393" />
        <Label text="Label" fontSize="24px" color="#232323" />
    </Container>
);
