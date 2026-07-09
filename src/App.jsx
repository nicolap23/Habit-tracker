import {useState } from 'react'
import './App.css'
import { Task } from './Tasks'
import { task_Type,taskTitles,initialTask } from './data/taskData'
import { TaskForm } from './components/TaskForm'
import { useLocaleStorage } from './hooks/useLocaleStorage'
import { Habits } from './components/Habits'
import { Goals } from './components/Goals'

function App() {
  
  const time = new Date()
  const [tasks, setTasks ] = useLocaleStorage(
    'tasks',
    initialTask
  )

  const [showHabitForm ,setShowHabitForm] = useState(false)
  
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

  return (
   <div className="min-h-screen bg-gray-100 p-8">

     <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value={''}>Todas</option>
        <option value={'daily'} >Diarias</option>
        <option value={'weekly'} >Semanales</option>
        <option value={'monthly'} >Del mes</option>
      </select>
  <div className="max-w-6xl mx-auto">
    
    <h1 className="text-4xl font-bold mb-8">
      Dashboard
    </h1>
    <div className="mb-2">
      <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wide">
        {new Intl.DateTimeFormat('es-CL', {
          weekday: 'long',
          day: 'numeric',
          month: 'long'
        }).format(time)}
    </h3>
</div>

    <TaskForm
      task={task}
      setTask={setTask}
      addTask={addTask}
      showTypes={showTypes}
      handleClick={handleClick}
      taskOptions={taskOptions}
    />

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

    <div className="grid md:grid-cols-2 gap-6 mt-6">  
      <Habits/>
      <Goals/>

    </div>
  
  </div>
</div>
  )
}
export default App
