export interface Task {
    id: number;
    text: string;
    description: string;
    concluded: boolean;
    createdAt: string;
    concludedAt?: string;
}
