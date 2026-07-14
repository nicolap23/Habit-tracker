import {PieChart,Pie,Tooltip,Legend,Cell,ResponsiveContainer } from 'recharts'

export function CompletionPieChart({completedToday,totalHabits}){

    const pieData = [
        {
            name:"Completados",
            value: completedToday
        },
        {
            name:"Pendientes",
            value: totalHabits - completedToday
        }
    ]

    const COLORS = ['#22C55E', '#F59E0B'];

    return(
        <ResponsiveContainer  width="100%" height={300}>
            <PieChart>
                <Pie data={pieData} dataKey="value" 
                    label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    cy="50%"
                    cx="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                >
                    {pieData.map((entry,index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
            </PieChart>
        </ResponsiveContainer>   
    )
}