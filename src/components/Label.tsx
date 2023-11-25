import styled from '@emotion/styled';

interface ContainerProps {
    readonly fontSize: string;
    readonly color: string;
}

const Container = styled.div<ContainerProps>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    overflow-x: hidden;
    text-align: right;
`;

interface Props {
    readonly text: string;
    readonly fontSize: string;
    readonly color: string;
}

export const Label = ({ text, fontSize, color }: Props) => (
    <Container fontSize={fontSize} color={color}>
        {text}
    </Container>
);
