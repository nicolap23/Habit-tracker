import { useState } from "react"
import { useLocaleStorage } from "../hooks/useLocaleStorage"

export function Habits({}){

    const [habits,setHabits] = useLocaleStorage(
        'habits',
        []
    )
    const [habit,setHabit] = useState('')


    const addHabit = () =>{
        if (!habit.trim()) return

        setHabits(prev => [
            ...prev,
            {
                id:Date.now(),
                name:habit
            }
        ])

        setHabit('')
    }

    const deleteHabit = (id) =>{
        setHabits(prev => prev.filter(habit => habit.id !== id))
    }

    return( 
        <div>
            <div className="flex gap-3 mb-3">
                <input
                    className="flex-1 border rounded-xl px-4 py-3 bg-white shadow"
                    placeholder="Agregar hábito..."
                    value={habit}
                    onChange={(e) => setHabit(e.target.value)}
                />

                <button
                    className="bg-black text-white px-4 py-3 rounded-xl"
                    onClick={addHabit}
                >
                    Agregar
                </button>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-bold text-lg mb-4">Habitos</h3>
            <ul className="space-y-2">
                
                {habits.map(habit =>(
                    <li className="flex justify-between items-center" key={habit.id}>
                        <span>{habit.name}</span>
                    <button className="text-red-500" 
                    onClick={() => deleteHabit(habit.id)}>X
                    </button>
                    </li>
                ))}
                
            </ul>
        </div>


        </div>

    )
}