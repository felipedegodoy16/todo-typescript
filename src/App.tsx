import { useState } from 'react';
import type { Task } from './types/Task';
import TaskList from './components/TaskList.tsx';
import TaskModal from './components/TaskModal.tsx';
import InfosModal from './components/InfosModal.tsx';
import { useTasks } from './hooks/useTasks.ts';
import { useModal } from './hooks/useModal.ts';

function App() {
    const [tasks, addTask, removeTask, concludeTask, reOpenTask] = useTasks();
    const [isModalOpen, changeModalState] = useModal();
    const [isInfosModalOpen, changeInfosModalState] = useModal();
    const [task, setTask] = useState<Task | null>(null);

    function openModal() {
        if (!isModalOpen) changeModalState();
        setTask(null);
    }

    function openInfosModal(task: Task) {
        if (!isInfosModalOpen) changeInfosModalState();
        setTask(task);
    }

    // function removeTask(id: number) {
    //     closeInfosModal();
    //     setTasks(tasks.filter((task) => task.id !== id));
    // }

    function editTask(task: Task) {
        if (isInfosModalOpen) changeInfosModalState();
        if (!isModalOpen) changeModalState();
        setTask(task);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full flex items-center justify-between absolute top-0 py-4 px-4">
                <h1 className="text-2xl font-bold text-center">To-Do List</h1>

                <button
                    onClick={openModal}
                    className="bg-blue-600 text-blue-100 py-2 px-4 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
                >
                    Nova Tarefa
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md m-4">
                <TaskList
                    tasks={tasks}
                    removeTask={removeTask}
                    reOpenTask={reOpenTask}
                    concludeTask={concludeTask}
                    openInfosModal={openInfosModal}
                />

                {isModalOpen && (
                    <TaskModal
                        onClose={changeModalState}
                        onAddTask={addTask}
                        task={task}
                    />
                )}

                <InfosModal
                    isOpen={isInfosModalOpen}
                    onClose={changeInfosModalState}
                    editTask={editTask}
                    removeTask={removeTask}
                    task={task}
                ></InfosModal>
            </div>
        </div>
    );
}

export default App;
