import { useContext } from 'react';
import styled from '@emotion/styled';

import { Button } from 'components/Button';
import { Display } from 'components/Display';
import { CalculatorContext } from 'context/CalculatorContext';

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
    const { onForward, onBackward, onClear, onEqual } = useContext(CalculatorContext);

    return (
        <Container>
            <Display />
            <ButtonTable>
                <div>
                    <Button label="(" onClick={() => onForward('(')} className="operator" />
                    <Button label=")" onClick={() => onForward(')')} className="operator" />
                    <Button label="←" onClick={onBackward} className="operator" />
                    <Button label="C" onClick={onClear} className="operator" />
                </div>
                <div>
                    <Button label="7" onClick={() => onForward('7')} />
                    <Button label="8" onClick={() => onForward('8')} />
                    <Button label="9" onClick={() => onForward('9')} />
                    <Button label="÷" onClick={() => onForward(' ÷ ')} className="operator" />
                </div>
                <div>
                    <Button label="4" onClick={() => onForward('4')} />
                    <Button label="5" onClick={() => onForward('5')} />
                    <Button label="6" onClick={() => onForward('6')} />
                    <Button label="×" onClick={() => onForward(' × ')} className="operator" />
                </div>
                <div>
                    <Button label="1" onClick={() => onForward('1')} />
                    <Button label="2" onClick={() => onForward('2')} />
                    <Button label="3" onClick={() => onForward('3')} />
                    <Button label="−" onClick={() => onForward(' − ')} className="operator" />
                </div>
                <div>
                    <Button label="0" onClick={() => onForward('0')} />
                    <Button label="." onClick={() => onForward('.')} />
                    <Button label="=" onClick={onEqual} className="equal" />
                    <Button label="+" onClick={() => onForward(' + ')} className="operator" />
                </div>
            </ButtonTable>
        </Container>
    );
};
