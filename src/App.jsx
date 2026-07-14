import './App.css'
import { initialTask } from './data/taskData'
import { useLocaleStorage } from './hooks/useLocaleStorage'
import { Habits } from './components/Habits'
import { Statistics } from './components/Statistics'
import { TaskSection } from './components/TaskSection'

function App() {
  
  const time = new Date()
  const [tasks, setTasks ] = useLocaleStorage(
    'tasks',
    initialTask
  )

   const [habits,setHabits] = useLocaleStorage(
        'habits',
        []
    )

  return (
   <div className="min-h-screen bg-gray-100 p-8">

     
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

    <TaskSection tasks={tasks} setTasks={setTasks}/>

    <div className="grid md:grid-cols-2 gap-6 mt-6">  
      <Habits habits={habits} 
      setHabits={setHabits} 
      />
      <Statistics habits={habits}/>

    </div>
  
  </div>
</div>
  )
}
export default App
