import { BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer} from 'recharts'

    export function HabitBarChart({habits}){

        const chartData = habits.map(habit => ({
            name: habit.name,
            completions: habit.history.length
        }))

        return(
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completions" name="Completados" fill="#10b981" radius={[4, 4, 0, 0]} />                
                </BarChart>
            </ResponsiveContainer>
        )
    }