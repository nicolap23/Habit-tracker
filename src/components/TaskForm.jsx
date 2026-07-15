export function TaskForm ({task,setTask,addTask,showTypes,handleClick,taskOptions}){

    return(
        <div className="bg-white rounded-2xl shadow-lg ring-1 ring-slate-200 p-6 mb-8">
        <div className="flex gap-3">
        <input
          className="flex-1 border rounded-lg px-4 py-2"
          placeholder="Agregar tarea..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2 rounded-lg" onClick={handleClick}>
          Agregar
        </button>
      </div>

      {showTypes && (
        <div className="flex gap-2 mt-4">
          {taskOptions.map(option =>(
            <button onClick={() => addTask(option.value)} key={option.value} className={`px-4 py-2 ${option.className} rounded-lg`}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
    )
}