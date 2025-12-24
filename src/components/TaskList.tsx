import type { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
    concludeTask: (id: number) => void;
    reOpenTask: (id: number) => void;
    removeTask: (id: number) => void;
    openInfosModal: (task: Task) => void;
}

function TaskList({
    tasks,
    concludeTask,
    reOpenTask,
    removeTask,
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
                    className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-all p-2 rounded-lg cursor-pointer"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) openInfosModal(task);
                    }}
                >
                    {task.concluded ? (
                        <span
                            onClick={(e) => {
                                if (e.target === e.currentTarget)
                                    openInfosModal(task);
                            }}
                            className="line-through text-gray-400"
                        >
                            {task.text}
                        </span>
                    ) : (
                        <span
                            onClick={(e) => {
                                if (e.target === e.currentTarget)
                                    openInfosModal(task);
                            }}
                        >
                            {task.text}
                        </span>
                    )}

                    <div className="flex gap-2">
                        {!task.concluded ? (
                            <button
                                onClick={() => concludeTask(task.id)}
                                className="bg-green-400 text-green-950 rounded-lg py-2 px-4 hover:bg-green-500 transition-all cursor-pointer"
                            >
                                Concluir
                            </button>
                        ) : (
                            <button
                                onClick={() => reOpenTask(task.id)}
                                className="bg-sky-500 text-sky-50 rounded-lg py-2 px-4 hover:bg-sky-700 transition-all cursor-pointer"
                            >
                                Reabrir
                            </button>
                        )}

                        <button
                            onClick={() => removeTask(task.id)}
                            className="bg-red-500 text-red-50 rounded-lg py-2 px-4 hover:bg-red-700 transition-all cursor-pointer"
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
