import { Button } from 'components/Button';
import { Display } from 'components/Display';

export const Calculator = () => (
    <div>
        <Display />
        <div>{Array(4).fill(<div>{Array(5).fill(<Button label="Button" />)}</div>)}</div>
    </div>
);
