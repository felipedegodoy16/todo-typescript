import type { Task } from '../types/Task';

interface InfosModalProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task | null;
}

function InfosModal({ isOpen, onClose, task }: InfosModalProps) {
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
            <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg m-4">
                <h2 className="text-xl font-bold mb-4 text-center">
                    {task.text}
                </h2>

                <p className="text-center">{task.description}</p>
            </div>
        </div>
    );
}

export default InfosModal;
