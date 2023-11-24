interface Props {
    readonly label: string;
}

export const Button = ({ label }: Props) => <button>{label}</button>;
