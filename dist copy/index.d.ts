/// <reference types="react" />
declare type DsBoxProps = {
    children: JSX.Element | string;
};
declare const DsBox: ({ children }: DsBoxProps) => JSX.Element;

interface DsButtonProps {
    label: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'chevron' | 'icon';
    onClick?: any;
}
declare const DsButton: (props: DsButtonProps) => JSX.Element;

interface DsTagProps {
    label: string;
    type: 'primary' | 'secondary' | 'error' | 'success' | 'alert';
    variant: 'solid' | 'outline';
}
declare const DsTag: (props: DsTagProps) => JSX.Element;

declare function changeTheme(tokens: any): void;

export { DsBox as box, DsButton as button, changeTheme, DsTag as tag };
