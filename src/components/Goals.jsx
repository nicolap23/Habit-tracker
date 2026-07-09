import { useState } from "react"
import { useLocaleStorage } from "../hooks/useLocaleStorage"


export function Goals (){



     const [goals,setGoals] = useLocaleStorage(
            'goals',
            []
        )
        const [goal,setGoal] = useState('')
    
    
        const addGoal = () =>{
            if (!goal.trim()) return
    
            setGoals(prev => [
                ...prev,
                {
                    id:Date.now(),
                    title:goal
                }
            ])
    
            setGoal('')
        }
    
        const deleteGoal = (id) =>{
            setGoals(prev => prev.filter(goal => goal.id !== id))
        }
    
        return( 
            <div>
                <div className="flex gap-3 mb-3">
                    <input
                        className="flex-1 border rounded-xl px-4 py-3 bg-white shadow"
                        placeholder="Agregar hábito..."
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
    
                    <button
                        className="bg-black text-white px-4 py-3 rounded-xl"
                        onClick={addGoal}
                    >
                        Agregar
                    </button>
                </div>
    
                <div className="bg-white rounded-xl shadow p-5">
                <h3 className="font-bold text-lg mb-4">Habitos</h3>
                <ul className="space-y-2">
                    
                    {goals.map(goal =>(
                        <li className="flex justify-between items-center" key={goal.id}>
                            <span>{goal.title}</span>
                        <button className="text-red-500" 
                        onClick={() => deleteGoal(goal.id)}>X
                        </button>
                        </li>
                    ))}
                    
                </ul>
            </div>
    
    
            </div>
    
        )
}