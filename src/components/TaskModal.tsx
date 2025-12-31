import { useState } from 'react';
import type { Task } from '../types/Task';

interface TaskModalProps {
    onClose: () => void;
    onAddTask: (
        id: number,
        text: string,
        description: string,
        priority: string,
        limitDate: string | undefined,
        concluded: boolean,
        createdAt: string
    ) => void;
    task: Task | null;
}

function formatToInputDate(dateString: string | undefined) {
    if (!dateString) return undefined;

    const datePart = dateString.split(',')[0];
    const [day, month, year] = datePart.split('/');

    return `${year}-${month}-${day}`;
}

function TaskModal({ onClose, onAddTask, task }: TaskModalProps) {
    const [text, setText] = useState<string>(task?.text ?? '');
    const [description, setDescription] = useState<string>(
        task?.description ?? ''
    );
    const [priority, setPriority] = useState<string>(task?.priority ?? 'down');
    const [limitDate, setLimitDate] = useState<string | undefined>(() => {
        return formatToInputDate(task?.limitDate);
    });
    const id = task?.id ?? -1;
    const concluded = task?.concluded ?? false;
    const createdAt = task?.createdAt ?? '';

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!text.trim()) return;
        if (!description.trim()) return;

        onAddTask(
            id,
            text,
            description,
            priority,
            limitDate,
            concluded,
            createdAt
        );
        setText('');
        setDescription('');
        setLimitDate(undefined);
        setPriority('down');
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
                        <label htmlFor="text">Tarefa *</label>
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
                        <label htmlFor="description">Descrição *</label>
                        <input
                            id="description"
                            type="text"
                            placeholder="Digite a descrição"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex gap-1 items-center">
                            <input
                                id="down"
                                name="priority"
                                type="radio"
                                value="down"
                                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                checked={priority === 'down'}
                                onChange={(e) => setPriority(e.target.value)}
                            />
                            <label htmlFor="down" className="cursor-pointer">
                                Baixa
                            </label>
                        </div>
                        <div className="flex gap-1 items-center">
                            <input
                                id="medium"
                                name="priority"
                                type="radio"
                                value="medium"
                                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                checked={priority === 'medium'}
                                onChange={(e) => setPriority(e.target.value)}
                            />
                            <label htmlFor="medium" className="cursor-pointer">
                                Média
                            </label>
                        </div>
                        <div className="flex gap-1 items-center">
                            <input
                                id="high"
                                name="priority"
                                type="radio"
                                value="high"
                                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                checked={priority === 'high'}
                                onChange={(e) => setPriority(e.target.value)}
                            />
                            <label htmlFor="high" className="cursor-pointer">
                                Alta
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col mb-2">
                        <label htmlFor="limitDate">Data Limite</label>
                        <input
                            id="limitDate"
                            type="date"
                            placeholder="Digite a data limite"
                            value={limitDate}
                            onChange={(e) => setLimitDate(e.target.value)}
                            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-bg duration-200 cursor-pointer"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-bg duration-200 cursor-pointer"
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
