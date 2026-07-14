import { calculateStatistics,calculateStreak  } from '../utils/statistics';
import { HabitBarChart } from './HabitBarChart';
import { CompletionPieChart } from './HabitPieChart';

export function Statistics({habits}){

    const {
        completedToday,
        completionRate,
        totalCompleted,
        longestStreak
    } = calculateStatistics(habits)

   return(
        <div>
            <h2>Estadisticas</h2>
            <p>Habitos: {habits.length}</p>
            <p>Completados hoy: {completedToday}</p>
            <p>Porcentaje completado: {completionRate}%</p>
            <p>Total completado: {totalCompleted}</p>
            {habits.map(habit => (
              <p key={habit.id}>Racha de {habit.name}: {calculateStreak(habit.history)}</p>
            ))}
            <p>🔥 Racha más larga: {longestStreak}</p>
            <HabitBarChart habits={habits}/>
            <CompletionPieChart completedToday={completedToday} totalHabits={habits.length}/>
        </div>
    )
}