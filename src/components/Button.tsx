import styled from '@emotion/styled';

const Container = styled.button`
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: #232323;
    cursor: pointer;
    font-family: 'Dosis', sans-serif;
    font-size: 24px;
    font-weight: 600;
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

    &.equal {
        background: #ffe83a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        color: #232323;
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
    readonly onClick?: () => void;
    readonly className?: string;
}

export const Button = ({ label, onClick, className }: Props) => (
    <Container onClick={onClick} className={className}>
        {label}
    </Container>
);
