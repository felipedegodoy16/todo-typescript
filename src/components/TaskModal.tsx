import { useState } from 'react';
import type { Task } from '../types/Task';

interface TaskModalProps {
    onClose: () => void;
    onAddTask: (id: number, text: string, description: string) => void;
    task: Task | null;
}

function TaskModal({ onClose, onAddTask, task }: TaskModalProps) {
    const [text, setText] = useState<string>(task?.text ?? '');
    const [description, setDescription] = useState<string>(
        task?.description ?? ''
    );
    const id = task?.id ?? -1;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!text.trim()) return;

        onAddTask(id, text, description);
        setText('');
        setDescription('');
        onClose();
    }

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
                <h2 className="text-xl font-bold mb-4">Nova Tarefa</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col mb-2">
                        <label htmlFor="text">Tarefa</label>
                        <input
                            id="text"
                            type="text"
                            placeholder="Digite a tarefa"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="description">Descrição</label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Digite a descrição"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskModal;
