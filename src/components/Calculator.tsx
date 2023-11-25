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
                {buttonTableSkeleton.map((row, index) => (
                    <div key={`button-row-${index}`}>
                        {row.map((props, index) => (
                            <Button key={`button-${index}`} {...props} />
                        ))}
                    </div>
                ))}
            </ButtonTable>
        </Container>
    );
};

const buttonTableSkeleton: { label: string; className?: string }[][] = [
    [
        {
            label: '(',
            className: 'operator',
        },
        {
            label: ')',
            className: 'operator',
        },
        {
            label: '←',
            className: 'operator',
        },
        {
            label: 'C',
            className: 'operator',
        },
    ],
    [
        {
            label: '7',
        },
        {
            label: '8',
        },
        {
            label: '9',
        },
        {
            label: '÷',
            className: 'operator',
        },
    ],
    [
        {
            label: '4',
        },
        {
            label: '5',
        },
        {
            label: '6',
        },
        {
            label: '×',
            className: 'operator',
        },
    ],
    [
        {
            label: '1',
        },
        {
            label: '2',
        },
        {
            label: '3',
        },
        {
            label: '−',
            className: 'operator',
        },
    ],
    [
        {
            label: '0',
        },
        {
            label: '.',
        },
        {
            label: '=',
            className: 'equal',
        },
        {
            label: '+',
            className: 'operator',
        },
    ],
];
