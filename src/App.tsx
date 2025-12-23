import { useState, useEffect } from 'react';
import type { Task } from './types/Task';
import TaskList from './components/TaskList.tsx';
import TaskModal from './components/TaskModal.tsx';
import InfosModal from './components/InfosModal.tsx';

function App() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem('tasks');

        if (!storedTasks) return [];

        try {
            return JSON.parse(storedTasks);
        } catch (error) {
            console.error('Erro ao ler tasks do localStorage', error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const [task, setTask] = useState<Task | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isInfosModalOpen, setIsInfosModalOpen] = useState<boolean>(false);

    function openModal() {
        setTask(null);
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

    function addTask(
        id: number,
        text: string,
        description: string,
        concluded: boolean
    ) {
        if (id === -1) {
            const newTask: Task = {
                id: Date.now(),
                text,
                description,
                concluded,
            };

            setTasks([...tasks, newTask]);
        } else {
            const newTask: Task = {
                id,
                text,
                description,
                concluded,
            };

            setTasks(tasks.map((task) => (task.id === id ? newTask : task)));
        }
    }

    function concludeTask(id: number) {
        closeInfosModal();
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, concluded: !task.concluded } : task
            )
        );
    }

    function removeTask(id: number) {
        closeInfosModal();
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function editTask(task: Task) {
        closeInfosModal();
        openModal();
        setTask(task);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md m-4">
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
                    concludeTask={concludeTask}
                    openInfosModal={openInfosModal}
                />

                {isModalOpen && (
                    <TaskModal
                        onClose={closeModal}
                        onAddTask={addTask}
                        task={task}
                    />
                )}

                <InfosModal
                    isOpen={isInfosModalOpen}
                    onClose={closeInfosModal}
                    editTask={editTask}
                    removeTask={removeTask}
                    task={task}
                ></InfosModal>
            </div>
        </div>
    );
}

export default App;
