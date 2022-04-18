/// <reference types="react" />
export interface DsButtonProps {
    label: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'chevron' | 'icon';
    onClick?: any;
}
declare const DsButton: (props: DsButtonProps) => JSX.Element;
export default DsButton;
