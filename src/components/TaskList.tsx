import type { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
    removeTask: (id: number) => void;
    editTask: (task: Task) => void;
    openInfosModal: (task: Task) => void;
}

function TaskList({
    tasks,
    removeTask,
    editTask,
    openInfosModal,
}: TaskListProps) {
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
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-lg cursor-pointer "
                    onClick={(e) => {
                        if (e.target === e.currentTarget) openInfosModal(task);
                    }}
                >
                    <span
                        onClick={(e) => {
                            if (e.target === e.currentTarget)
                                openInfosModal(task);
                        }}
                    >
                        {task.text}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => editTask(task)}
                            className="bg-yellow-500 text-yellow-950 rounded-lg py-2 px-4 hover:bg-yellow-700 transition-all cursor-pointer"
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => removeTask(task.id)}
                            className="bg-red-600 text-red-950 rounded-lg py-2 px-4 hover:bg-red-700 transition-all cursor-pointer"
                        >
                            Remover
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
