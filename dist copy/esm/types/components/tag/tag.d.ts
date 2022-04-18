/// <reference types="react" />
export interface DsTagProps {
    label: string;
    type: 'primary' | 'secondary' | 'error' | 'success' | 'alert';
    variant: 'solid' | 'outline';
}
declare const DsTag: (props: DsTagProps) => JSX.Element;
export default DsTag;
