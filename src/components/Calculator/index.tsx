import { Button } from 'components/Button';
import { Display } from 'components/Display';

export const Calculator = () => (
    <div>
        <Display />
        <div>{Array(5).fill(<div>{Array(4).fill(<Button label="0" />)}</div>)}</div>
    </div>
);
