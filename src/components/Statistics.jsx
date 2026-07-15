import { calculateStatistics,calculateStreak  } from '../utils/statistics';
import {HabitBarChart} from './HabitBarChart'
import {CompletionPieChart} from './HabitPieChart'

export function Statistics({habits}){

    const {
        completedToday,
        completionRate,
        totalCompleted,
        longestStreak
    } = calculateStatistics(habits)

   return(
        <div className="space-y-8">

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
                    Estadísticas
                </h2>
                <div className="space-y-3">
                    <p>Hábitos: {habits.length}</p>
                    <p>Completados hoy: {completedToday}</p>
                    <p>Porcentaje completado: {completionRate}%</p>
                    <p>Total completado: {totalCompleted}</p>

                    {habits.map(habit => (
                        <p key={habit.id}>
                            Racha de {habit.name}: {calculateStreak(habit.history)}
                        </p>
                    ))}
                    <p>🔥 Racha más larga: {longestStreak}</p>
                </div>
            </div>
            <div className="mb-8">
                <HabitBarChart habits={habits}/>
            </div>
        </div>
    )
}