interface FiltersProps {
    searchFilter: string;
    setSearchFilter: (searchFilter: string) => void;
    setPriorityFilter: (priorityFilter: string) => void;
    setStatusFilter: (statusFilter: string) => void;
    setOverdueFilter: (overdueFilter: string) => void;
}

function Filters({
    searchFilter,
    setSearchFilter,
    setPriorityFilter,
    setStatusFilter,
    setOverdueFilter,
}: FiltersProps) {
    return (
        <div
            id="filters"
            className="max-h-0 gap-x-3 gap-y-2 hidden overflow-hidden transition-height duration-200 flex-wrap *:flex-1"
        >
            <div className="grid gap-1">
                <span>Buscar</span>
                <input
                    type="search"
                    className="p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-bg duration-200 focus:outline-none focus:border-blue-500 sm:text-sm cursor-text  text-sm"
                    id="searchFilter"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                />
            </div>

            <div className="grid gap-1">
                <span>Prioridade</span>
                <div className="relative min-w-24">
                    <select
                        className="p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-bg duration-200 focus:outline-none focus:border-blue-500 sm:text-sm cursor-pointer w-full appearance-none"
                        onChange={(e) => setPriorityFilter(e.target.value)}
                        name="priorityFilter"
                        id="priorityFilter"
                    >
                        <option value="all">Todas</option>
                        <option value="down">Baixa</option>
                        <option value="medium">Média</option>
                        <option value="high">Alta</option>
                    </select>
                    <span
                        className="
                        pointer-events-none
                        absolute
                        right-2
                        top-1/2
                        -translate-y-1/2
                        text-gray-500
                        text-xs
                    "
                    >
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
                </div>
            </div>

            <div className="grid gap-1">
                <span>Status</span>
                <div className="relative min-w-24">
                    <select
                        className="p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-bg duration-200 focus:outline-none focus:border-blue-500 sm:text-sm cursor-pointer w-full appearance-none"
                        onChange={(e) => setStatusFilter(e.target.value)}
                        name="statusFilter"
                        id="statusFilter"
                    >
                        <option value="all">Todas</option>
                        <option value="open">Abertas</option>
                        <option value="concluded">Concluídas</option>
                    </select>
                    <span
                        className="
                        pointer-events-none
                        absolute
                        right-2
                        top-1/2
                        -translate-y-1/2
                        text-gray-500
                        text-xs
                    "
                    >
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
                </div>
            </div>

            <div className="grid gap-1">
                <span>Vencidas</span>
                <div className="relative min-w-24">
                    <select
                        className="p-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition-bg duration-200 focus:outline-none focus:border-blue-500 sm:text-sm cursor-pointer w-full appearance-none"
                        onChange={(e) => setOverdueFilter(e.target.value)}
                        name="overdueFilter"
                        id="overdueFilter"
                    >
                        <option value="all">Todas</option>
                        <option value="overdue">Vencidas</option>
                        <option value="not-overdue">Não vencidas</option>
                    </select>
                    <span
                        className="
                        pointer-events-none
                        absolute
                        right-1
                        top-1/2
                        -translate-y-1/2
                        text-gray-500
                        text-xs
                    "
                    >
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
                </div>
            </div>

            <button
                className="self-end py-2 px-4 bg-blue-600 text-blue-50 rounded-md shadow-sm hover:bg-blue-700 transition-bg duration-200 focus:outline-none focus:border-blue-500 text-sm cursor-pointer w-full"
                onClick={() => {
                    setSearchFilter('');
                    setPriorityFilter('all');
                    setStatusFilter('all');
                    setOverdueFilter('all');
                    document
                        .querySelector('#searchFilter')
                        ?.setAttribute('value', '');
                    document.querySelectorAll('select').forEach((select) => {
                        select.value = 'all';
                    });
                }}
            >
                Limpar Filtros
            </button>
        </div>
    );
}

export default Filters;
