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
    const [priorityFilter, setPriorityFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');

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

                <div
                    id="filters"
                    className="max-h-0 gap-2 hidden overflow-hidden transition-height duration-200"
                >
                    <select
                        className="justify-self-end p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-bg duration-200 focus:outline-none focus:border-blue-500 sm:text-sm cursor-pointer"
                        onChange={(e) => setPriorityFilter(e.target.value)}
                        name="priorityFilter"
                        id="priorityFilter"
                    >
                        <option value="all">Todas</option>
                        <option value="down">Baixa</option>
                        <option value="medium">Média</option>
                        <option value="high">Alta</option>
                    </select>

                    <select
                        className="justify-self-end p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-bg duration-200 focus:outline-none focus:border-blue-500 sm:text-sm cursor-pointer"
                        onChange={(e) => setStatusFilter(e.target.value)}
                        name="statusFilter"
                        id="statusFilter"
                    >
                        <option value="all" className="cursor-pointer p-2">
                            Todas
                        </option>
                        <option value="open">Abertas</option>
                        <option value="concluded">Concluídas</option>
                    </select>

                    <button
                        className="justify-self-end py-2 px-4 bg-blue-600 text-blue-50 rounded-md shadow-sm hover:bg-blue-700 transition-bg duration-200 focus:outline-none focus:border-blue-500 text-sm cursor-pointer"
                        onClick={() => {
                            setPriorityFilter('all');
                            setStatusFilter('all');
                            document
                                .querySelectorAll('select')
                                .forEach((select) => {
                                    select.value = 'all';
                                });
                        }}
                    >
                        Limpar Filtros
                    </button>
                </div>

                <TaskList
                    tasks={tasks}
                    priorityFilter={priorityFilter}
                    statusFilter={statusFilter}
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
