export interface iPizza {
    title: string;
    values: number[]; 
    labels: string[];
}

interface iInfo {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    tension?: number;
    fill?: boolean;
    showLine?: boolean;
}

export interface iLine {
    title: string;
    info: iInfo[];
    labels: string[];
}