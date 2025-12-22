import type { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
    removeTask: (id: number) => void;
    openInfosModal: (task: Task) => void;
}

function TaskList({ tasks, removeTask, openInfosModal }: TaskListProps) {
    if (tasks.length === 0) {
        return (
            <p className="text-center text-gray-500">
                Nenhuma tarefa adicionada
            </p>
        );
    }

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                    onClick={() => openInfosModal(task)}
                >
                    <span>{task.text}</span>
                    <button
                        onClick={() => removeTask(task.id)}
                        className="bg-red-600 text-red-950 rounded-lg py-2 px-4 hover:bg-red-700 transition-all cursor-pointer"
                    >
                        Remover
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
