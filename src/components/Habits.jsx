import { useState } from "react"

export function Habits({habits,setHabits}){

    const [habit, setHabit] = useState('')
    const [goal, setGoal] = useState("0");
    const today = new Date().toISOString().split("T")[0];

    const addHabit = () =>{
        if (!habit.trim() || !goal.trim()) return

        setHabits(prev => [
            ...prev,
            {
                id:Date.now(),
                name:habit,
                goal:Number(goal),
                history:[]
            }
        ])

        setHabit('')
        setGoal('')
    }

    const deleteHabit = (id) =>{
        setHabits(prev => prev.filter(habit => habit.id !== id))
    }

    const completeHabit = (id) =>{

        setHabits(prev =>
            prev.map(habit =>{
                if(habit.id !== id ) return habit
                if (habit.history.includes(today)) return habit
                return {
                    ...habit,
                    history:[
                        ...habit.history,
                        today
                    ]
                }
            })
        )
    }

    return( 
        <div >
            <div>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">
                    Agregar hábito
                </h2>
                <div className="grid grid-cols-[3fr_1fr] gap-4">
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Nuevo hábito
                        </label>

                        <input
                            className="w-full border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Leer..."
                            value={habit}
                            onChange={(e) => setHabit(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Meta 
                        </label>

                        <input
                            type="number"
                            className="w-full border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="1"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        onClick={addHabit}
                        className="w-56 bg-black text-white px-10 py-3 rounded-xl font-medium"
                    >
                        Agregar
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
                <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Hábitos</h2>
                <ul className="space-y-2">
                    {habits.map(habit =>{
                        const completedToday = habit.history.includes(today);
                        return(
                        
                    <li key={habit.id} className="flex justify-between items-center">
                        <div>
                            <p className="text-lg font-bold font-serif  text-slate-800">{habit.name}</p>

                            <p className="text-sm text-slate-500">
                                Meta: {habit.goal} veces
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                disabled={completedToday}
                                onClick={() => completeHabit(habit.id)}
                            >
                                {completedToday ? "✅" : "Completar"}
                            </button>

                            <button
                                className="text-red-500"
                                onClick={() => deleteHabit(habit.id)}
                            >
                                ❌
                            </button>
                        </div>
                    </li>
                    )})}
                </ul>
            </div>
            </div>
        </div>

    )
}