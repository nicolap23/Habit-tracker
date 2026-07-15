import { TaskForm } from "./TaskForm"
import {useState } from 'react'
import { task_Type,taskTitles,initialTask } from '../data/taskData'
import { Task } from '../Tasks'

export function TaskSection({tasks,setTasks}){


      
      const [task, setTask] = useState('')
      
      const [showTypes, setShowTypes] = useState(false)
    
      const [selectedFilter, setSelectedFilter] = useState('')
    
      const taskOptions = [
        { value: 'daily', label: 'Día', className:'bg-blue-100' },
        { value: 'weekly', label: 'Semana', className:'bg-green-100' },
        { value: 'monthly', label: 'Mes', className:'bg-purple-100' }
      ]
    
        
        const addTask = (type) =>{
            if (!task.trim()) return
            

            setTasks(prev =>[
            ...prev,
            {
                id:Date.now(),
                task,
                type
            }
            ])

            setTask('')
            setShowTypes(false)
        }

        const deleteTask = (id) =>{
            setTasks(tasks.filter(task => task.id !==id))
        }
        
        const handleClick = () =>{
            if(!task.trim()) return

            setShowTypes(true)
        }


    return(
        <div className="space-y-8">

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <TaskForm
                    task={task}
                    setTask={setTask}
                    addTask={addTask}
                    showTypes={showTypes}
                    handleClick={handleClick}
                    taskOptions={taskOptions}
                />
                <div className="mt-6 flex items-center gap-3">
                    <select 
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <option value="">Todas</option>
                        <option value="daily">Diarias</option>
                        <option value="weekly">Semanales</option>
                        <option value="monthly">Del mes</option>
                    </select>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                    {selectedFilter.trim() === '' ? 
                    (
                        <>
                        {Object.keys(task_Type).map(type =>(
                            <Task key={type} tasks={tasks} task_Type={type} title={`Tareas ${taskTitles[type]}`} deleteTask={deleteTask}/>
                        ))}
                        </>
                    ):(
                        <Task tasks={tasks} task_Type={selectedFilter} title={`Tareas ${taskTitles[selectedFilter]}`} deleteTask={deleteTask}/>
                    )  
                    }
                </div>
            </div>       
        </div>
    )
}