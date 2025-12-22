import { useState } from 'react';
import type { Task } from './types/Task';
import TaskList from './components/TaskList.tsx';
import TaskModal from './components/TaskModal.tsx';
import InfosModal from './components/InfosModal.tsx';

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isInfosModalOpen, setIsInfosModalOpen] = useState<boolean>(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function openInfosModal(task: Task) {
        setIsInfosModalOpen(true);
        setTask(task);
    }

    function closeInfosModal() {
        setIsInfosModalOpen(false);
    }

    function addTask(text: string, description: string) {
        const newTask: Task = {
            id: Date.now(),
            text,
            description,
        };

        setTasks([...tasks, newTask]);
    }

    function removeTask(id: number) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Lista de Tarefas
                </h1>

                <button
                    onClick={openModal}
                    className="w-full mb-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Nova Tarefa
                </button>

                <TaskList
                    tasks={tasks}
                    removeTask={removeTask}
                    openInfosModal={openInfosModal}
                />

                <TaskModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onAddTask={addTask}
                ></TaskModal>

                <InfosModal
                    isOpen={isInfosModalOpen}
                    onClose={closeInfosModal}
                    task={task}
                ></InfosModal>
            </div>
        </div>
    );
}

export default App;
