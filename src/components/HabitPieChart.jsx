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
        <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center" >Progreso del día ⭐</h3>
            <ResponsiveContainer  width="100%" height={350}>
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
                        fontSize={20}
                    >
                        {pieData.map((entry,index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconType="circle"  wrapperStyle={{fontSize: "18px"}} verticalAlign="bottom" height={5}/>
                </PieChart>
            </ResponsiveContainer>
        </div>   
    )
}