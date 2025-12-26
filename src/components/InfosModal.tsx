import type { Task } from '../types/Task';

interface InfosModalProps {
    isOpen: boolean;
    onClose: () => void;
    editTask: (task: Task) => void;
    removeTask: (id: number) => void;
    task: Task | null;
}

function InfosModal({
    isOpen,
    onClose,
    editTask,
    removeTask,
    task,
}: InfosModalProps) {
    if (!isOpen) return null;
    if (!task) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg m-4 grid gap-5">
                <h2 className="text-gray-800 text-xl font-bold text-center">
                    {task.text}
                </h2>

                <div className="grid gap-2 border-t pt-5 border-b pb-5 border-gray-300">
                    <p>Descrição: {task.description}</p>
                    <p>Criada em: {task.createdAt}</p>
                    <p>Limite: {task.limitDate}</p>
                    {task.concluded && <p>Concluída em: {task.concludedAt}</p>}
                    <p>
                        {task.concluded ? (
                            <span className="text-sky-950 bg-sky-400 py-1 px-2 rounded">
                                Concluída
                            </span>
                        ) : (
                            <span className="text-green-950 bg-green-400 py-1 px-2 rounded">
                                Aberta
                            </span>
                        )}
                    </p>
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-bg duration-200 cursor-pointer"
                    >
                        Fechar
                    </button>
                    {!task.concluded && (
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
                    )}
                    <button
                        onClick={() => {
                            if (
                                confirm(
                                    'Tem certeza que deseja excluir esta tarefa?'
                                )
                            )
                                removeTask(task.id);
                        }}
                        className="bg-red-600 rounded-lg py-2 px-2 hover:bg-red-700 transition-bg duration-200 cursor-pointer"
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
            </div>
        </div>
    );
}

export default InfosModal;
