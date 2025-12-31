export interface Task {
    id: number;
    text: string;
    description: string;
    priority: string;
    concluded: boolean;
    limitDate?: string;
    createdAt: string;
    concludedAt?: string;
}
