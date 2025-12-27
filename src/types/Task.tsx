export interface Task {
    id: number;
    text: string;
    description: string;
    priority: string;
    concluded: boolean;
    createdAt: string;
    concludedAt?: string;
}
