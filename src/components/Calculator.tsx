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
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    margin-top: 16px;
    width: 344px;
`;

export const Calculator = () => {
    return (
        <Container>
            <Display />
            <ButtonTable>
                <div>
                    <Button label="(" className="operator" />
                    <Button label=")" className="operator" />
                    <Button label="←" className="operator" />
                    <Button label="C" className="operator" />
                </div>
                <div>
                    <Button label="7" />
                    <Button label="8" />
                    <Button label="9" />
                    <Button label="÷" className="operator" />
                </div>
                <div>
                    <Button label="4" />
                    <Button label="5" />
                    <Button label="6" />
                    <Button label="×" className="operator" />
                </div>
                <div>
                    <Button label="1" />
                    <Button label="2" />
                    <Button label="3" />
                    <Button label="−" className="operator" />
                </div>
                <div>
                    <Button label="0" />
                    <Button label="." />
                    <Button label="=" className="equal" />
                    <Button label="+" className="operator" />
                </div>
            </ButtonTable>
        </Container>
    );
};
