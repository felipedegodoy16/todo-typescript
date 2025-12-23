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
                <h2 className="text-xl font-bold text-center">{task.text}</h2>

                <p className="text-center">{task.description}</p>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                    >
                        Fechar
                    </button>
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
            </div>
        </div>
    );
}

export default InfosModal;
