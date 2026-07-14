import { useState } from "react"

export function Habits({habits,setHabits}){

    const [habit, setHabit] = useState('')
    const [goal, setGoal] = useState("0");
    const today = new Date().toISOString().split("T")[0];

    const addHabit = () =>{
        if (!habit.trim()) return

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
        <div>
            <div className="bg-white rounded-xl shadow p-5 mb-6">
                <div className="grid grid-cols-[3fr_1fr] gap-4">
                    <div>
                    <label className="block text-sm font-medium mb-1">
                        Nuevo hábito
                    </label>

                    <input
                        className="w-full border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Programar"
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
                        min="1"
                        className="w-full border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="1"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                    </div>
                </div>

                <div className="mt-5">
                    <button
                    onClick={addHabit}
                    className="bg-black text-white px-6 py-3 rounded-xl"
                    >
                    Agregar
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold text-lg mb-4">Hábitos</h3>
            <ul className="space-y-2">
                
                {habits.map(habit =>{
                    const completedToday = habit.history.includes(today);
                    return(
                    
                    <li className="flex justify-between items-center" key={habit.id}>
                        <span>{habit.name} </span>
                        <span>Meta {habit.goal} veces</span>
                    <button disabled={completedToday} onClick={() => completeHabit(habit.id)}>
                        {completedToday ? "✅":"Completar"}
                    </button>

                    <button className="text-red-500" 
                    onClick={() => deleteHabit(habit.id)}>X
                    </button>
                    
                    </li>
                )})}
                
            </ul>
        </div>


        </div>

    )
}