import { useState } from 'react';
import type { Task } from './types/Task';
import TaskList from './components/TaskList.tsx';
import TaskModal from './components/TaskModal.tsx';
import InfosModal from './components/InfosModal.tsx';
import { useTasks } from './hooks/useTasks.ts';
import { useModal } from './hooks/useModal.ts';
import Filters from './components/Filters.tsx';

function App() {
    const [tasks, addTask, removeTask, concludeTask, reOpenTask] = useTasks();
    const [isModalOpen, changeModalState] = useModal();
    const [isInfosModalOpen, changeInfosModalState] = useModal();
    const [task, setTask] = useState<Task | null>(null);
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [priorityFilter, setPriorityFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [overdueFilter, setOverdueFilter] = useState<string>('all');

    function openModal() {
        if (!isModalOpen) changeModalState();
        setTask(null);
    }

    function openInfosModal(task: Task) {
        if (!isInfosModalOpen) changeInfosModalState();
        setTask(task);
    }

    function editTask(task: Task) {
        if (isInfosModalOpen) changeInfosModalState();
        if (!isModalOpen) changeModalState();
        setTask(task);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md m-4 grid gap-4">
                <h1 className="text-2xl font-bold text-center">To-Do List</h1>

                <button
                    onClick={openModal}
                    className="bg-blue-600 text-blue-50 py-2 rounded-lg hover:bg-blue-700 transition-bg duration-200 cursor-pointer"
                >
                    Nova Tarefa
                </button>

                <span
                    className="cursor-pointer bg-gray-200 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-300 transition-bg duration-200 text-center flex items-center justify-center"
                    onClick={(e) => {
                        e.currentTarget
                            .querySelector('svg')
                            ?.classList.toggle('rotate-180');

                        const filters = document.querySelector('#filters');

                        filters?.classList.toggle('max-h-9999');
                        filters?.classList.toggle('hidden');
                        filters?.classList.toggle('flex');
                    }}
                >
                    Filtros{' '}
                    <span className="ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            className="fill-gray-600 transition-transform duration-200"
                        >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </span>
                </span>

                <Filters
                    searchFilter={searchFilter}
                    setPriorityFilter={setPriorityFilter}
                    setStatusFilter={setStatusFilter}
                    setSearchFilter={setSearchFilter}
                    setOverdueFilter={setOverdueFilter}
                />

                <TaskList
                    tasks={tasks}
                    searchFilter={searchFilter}
                    priorityFilter={priorityFilter}
                    statusFilter={statusFilter}
                    overdueFilter={overdueFilter}
                    removeTask={removeTask}
                    reOpenTask={reOpenTask}
                    editTask={editTask}
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
