export function Task({tasks,task_Type,title,deleteTask}){

    return(
        <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <ul className="space-y-2">
                
                {tasks.filter(task => task.type === task_Type)
                
                .map(task =>(
                    <li className="flex justify-between items-center" key={task.id}>
                        <span>{task.task}</span>
                    <button className="text-red-500" 
                    onClick={() => deleteTask(task.id)}>X
                    </button>
                    </li>
                ))
                
                }

            </ul>
        </div>
    )



}