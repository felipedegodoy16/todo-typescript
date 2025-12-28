import type { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
    priorityFilter: string;
    statusFilter: string;
    concludeTask: (id: number) => void;
    reOpenTask: (id: number) => void;
    editTask: (task: Task) => void;
    removeTask: (id: number) => void;
    openInfosModal: (task: Task) => void;
}

function TaskList({
    tasks,
    priorityFilter,
    statusFilter,
    concludeTask,
    editTask,
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
            {tasks
                .filter((task) => {
                    if (priorityFilter === 'all') return true;
                    return task.priority === priorityFilter;
                })
                .filter((task) => {
                    if (statusFilter === 'all') return true;
                    if (statusFilter === 'concluded') return task.concluded;
                    return !task.concluded;
                })
                .map((task) => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-bg duration-200 p-2 rounded-lg cursor-pointer"
                        onClick={(e) => {
                            if (e.target === e.currentTarget)
                                openInfosModal(task);
                        }}
                    >
                        <div className="flex items-center gap-2">
                            {task.priority === 'high' ? (
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            ) : task.priority === 'medium' ? (
                                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            ) : (
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            )}

                            {task.concluded ? (
                                <span
                                    onClick={(e) => {
                                        if (e.target === e.currentTarget)
                                            openInfosModal(task);
                                    }}
                                    className="font-bold line-through text-gray-400"
                                >
                                    {task.text}
                                </span>
                            ) : (
                                <span
                                    onClick={(e) => {
                                        if (e.target === e.currentTarget)
                                            openInfosModal(task);
                                    }}
                                    className="font-bold text-gray-700"
                                >
                                    {task.text}
                                </span>
                            )}
                        </div>

                        <div className="flex gap-2">
                            {!task.concluded ? (
                                <button
                                    onClick={() => concludeTask(task.id)}
                                    className="bg-green-400 rounded-lg py-2 px-2 hover:bg-green-600 transition-bg duration-200 cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        className="fill-green-100"
                                    >
                                        <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" />
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    onClick={() => reOpenTask(task.id)}
                                    className="bg-sky-500 text-sky-50 rounded-lg py-2 px-2 hover:bg-sky-700 transition-bg duration-200 cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        className="fill-sky-100"
                                    >
                                        <path d="M873-88 609-352 495-238 269-464l56-58 170 170 56-56-414-414 56-58 736 736-56 56ZM269-238 43-464l56-56 170 170 56 56-56 56Zm452-226-56-56 196-196 58 54-198 198ZM607-578l-56-56 86-86 56 56-86 86Z" />
                                    </svg>
                                </button>
                            )}

                            <button
                                onClick={() => editTask(task)}
                                className="bg-yellow-500 rounded-lg py-2 px-2 hover:bg-yellow-600 transition-bg duration-200 cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    className="fill-yellow-100"
                                >
                                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                                </svg>
                            </button>

                            <button
                                onClick={() => {
                                    if (
                                        confirm(
                                            'Tem certeza que deseja excluir esta tarefa?'
                                        )
                                    )
                                        removeTask(task.id);
                                }}
                                className="bg-red-500 text-red-50 rounded-lg py-2 px-2 hover:bg-red-700 transition-bg duration-200 cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    className="fill-red-100"
                                >
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
        </ul>
    );
}

export default TaskList;
