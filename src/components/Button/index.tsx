import styled from '@emotion/styled';

const Container = styled.button`
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: #232323;
    cursor: pointer;
    font-family: inherit;
    font-size: 24px;
    height: 70px;
    width: 70px;
    margin: 8px;

    &.operator {
        backdrop-filter: blur(5.5px);
        -webkit-backdrop-filter: blur(5.5px);
        background: #d72880;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        color: #fff;
    }

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 1;
        box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2);
    }
`;

interface Props {
    readonly label: string;
    readonly isSpecial: boolean;
}

export const Button = ({ label, isSpecial }: Props) => (
    <Container className={isSpecial ? 'operator' : undefined}>{label}</Container>
);
