import { useLocalStorage } from './useLocalStorage.ts';
import type { Task } from '../types/Task';

const STORAGE_KEY = 'tasks';

export function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(STORAGE_KEY, []);

    function addTask(
        id: number,
        text: string,
        description: string,
        limitDate: string,
        concluded: boolean
    ) {
        if (id === -1) {
            const newTask: Task = {
                id: Date.now(),
                text,
                description,
                limitDate,
                concluded,
                createdAt: new Date().toLocaleString('pt-BR'),
            };

            setTasks([...tasks, newTask]);
        } else {
            const newTask: Task = {
                id,
                text,
                description,
                limitDate,
                concluded,
                createdAt: new Date().toLocaleString('pt-BR'),
            };

            setTasks(tasks.map((task) => (task.id === id ? newTask : task)));
        }
    }

    function removeTask(id: number) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function concludeTask(id: number) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          concluded: !task.concluded,
                          concludedAt: new Date().toLocaleString('pt-BR'),
                      }
                    : task
            )
        );
    }

    function reOpenTask(id: number) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, concluded: false, concludedAt: '' }
                    : task
            )
        );
    }

    return [tasks, addTask, removeTask, concludeTask, reOpenTask] as const;
}
