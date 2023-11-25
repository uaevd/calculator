import styled from '@emotion/styled';

import { Button } from 'components/Button';
import { Display } from 'components/Display';

const Container = styled.div`
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(35, 35, 35, 0.1);
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const ButtonTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    margin-top: 16px;
    width: 344px;
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Calculator = () => (
    <Container>
        <Display />
        <ButtonTable>
            {Array(5).fill(
                <ButtonRow>{Array(4).fill(<Button label="0" isSpecial={true} />)}</ButtonRow>,
            )}
        </ButtonTable>
    </Container>
);
