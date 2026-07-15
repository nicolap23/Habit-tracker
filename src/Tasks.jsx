export function Task({tasks,task_Type,title,deleteTask}){

    return(
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5">
        <h3 className="font-bold text-xl text-slate-800 mb-4">
            {title}
        </h3>

        <ul className="space-y-1">
            {tasks.filter(task => task.type === task_Type)
            .map(task =>(
                <li 
                    className="flex justify-between items-center px-3 py-2"
                    key={task.id}
                >
                    <span className="text-slate-700 font-medium">
                        {task.task}
                    </span>

                    <button 
                        className="text-red-500 hover:text-red-700 font-bold"
                        onClick={() => deleteTask(task.id)}
                    >
                        ×
                    </button>
                </li>
            ))}
        </ul>
    </div>
)
}