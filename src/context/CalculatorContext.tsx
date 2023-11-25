import { createContext, useState } from 'react';

interface Context {
    readonly snapshot: string;
    readonly buffer: string;
    readonly onForward: (value: string) => void;
    readonly onBackward: () => void;
    readonly onClear: () => void;
    readonly onEqual: () => void;
}

export const CalculatorContext = createContext<Context>({
    snapshot: '',
    buffer: '',
    /* eslint-disable @typescript-eslint/no-empty-function */
    onForward: () => {},
    onBackward: () => {},
    onClear: () => {},
    onEqual: () => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const CalculatorContextProvider = ({ children }: Props) => {
    const [snapshot, setSnapshot] = useState('');
    const [buffer, setBuffer] = useState('');

    const onForward = (value: string) => {
        if (snapshot) setSnapshot('');
        setBuffer(`${buffer}${value}`);
    };
    const onBackward = () => {
        if (snapshot) setSnapshot('');
        if (buffer.length) {
            const resultBuffer = buffer.replace(/\s+$/, '').slice(0, -1).replace(/\s+$/, '');
            if (!resultBuffer) setBuffer('');
            else setBuffer(resultBuffer);
        }
    };
    const onClear = () => {
        setSnapshot('');
        setBuffer('');
    };
    const onEqual = () => {
        try {
            const modifiedBuffer = buffer.replace('−', '-').replace('×', '*').replace('÷', '/');
            const evalResult = Number(eval(modifiedBuffer));
            const formattedResult = evalResult
                .toFixed(9)
                .replace(/\.?0+$/, '')
                .replace('-', '− ');
            setSnapshot(`${buffer} =`);
            setBuffer(formattedResult);
        } catch (e) {
            alert('Invalid Buffer!');
        }
    };

    return (
        <CalculatorContext.Provider
            value={{
                snapshot,
                buffer,
                onForward,
                onBackward,
                onClear,
                onEqual,
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};
