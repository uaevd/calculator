import styled from '@emotion/styled';

import { Calculator } from 'components/Calculator';

const Container = styled.div`
    align-items: center;
    background: linear-gradient(320deg, #eb92be, #ffef78);
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

export const CalculatorPage = () => (
    <Container>
        <Calculator />
    </Container>
);
