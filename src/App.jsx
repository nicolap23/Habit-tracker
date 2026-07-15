import './App.css'
import { initialTask } from './data/taskData'
import { useLocaleStorage } from './hooks/useLocaleStorage'
import { Habits } from './components/Habits'
import { Statistics } from './components/Statistics'
import { TaskSection } from './components/TaskSection'
import { CompletionPieChart } from './components/HabitPieChart'
import { calculateStatistics } from './utils/statistics';

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
  const { completedToday } = calculateStatistics(habits);

  return (
   <div className="min-h-screen bg-gray-100 py-10 px-6">
     
    <div className="max-w-7xl mx-auto space-y-8">
    
      <div className="text-center ">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-700">
          {new Intl.DateTimeFormat("es-CL", {
              weekday: "long",
              day: "numeric",
              month: "long",
          }).format(time)}
        </p>
      </div>

    <TaskSection tasks={tasks} setTasks={setTasks}/>

    <div className="grid lg:grid-cols-2 gap-8">  
      <Habits habits={habits} setHabits={setHabits}/>
      <Statistics habits={habits}/>
    </div>
    <CompletionPieChart completedToday={completedToday} totalHabits={habits.length}/>
    
  </div>
</div>
  )
}
export default App