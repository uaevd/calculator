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
    const [buffer, setBuffer] = useState('0');

    const onForward = (value: string) => {
        if (snapshot) setSnapshot('');
        if (buffer === '0') setBuffer(value);
        else setBuffer(buffer + value);
    };
    const onBackward = () => {
        if (snapshot) setSnapshot('');
        if (buffer.length) {
            const resultBuffer = buffer.replace(/\s+$/, '').slice(0, -1).replace(/\s+$/, '');
            if (!resultBuffer) setBuffer('0');
            else setBuffer(resultBuffer);
        }
    };
    const onClear = () => {
        setSnapshot('');
        setBuffer('0');
    };
    const onEqual = () => {
        setSnapshot(buffer + ' =');
        setBuffer(eval(buffer));
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
