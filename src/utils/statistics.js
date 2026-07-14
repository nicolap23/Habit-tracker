export function calculateStreak(history) {
    let streak = 0;
    let date = new Date();

    while (history.includes(date.toISOString().split("T")[0])) {
        streak++;
        date.setDate(date.getDate() - 1);
    }

    return streak;
}

export function calculateStatistics(habits) {
    const today = new Date().toISOString().split("T")[0];

    const completedToday = habits.filter(
        habit => habit.history.includes(today)
    ).length;

    const completionRate = habits.length > 0
        ? Math.round((completedToday / habits.length) * 100)
        : 0;

    const totalCompleted = habits.reduce(
        (total, habit) => total + habit.history.length,
        0
    );

    const longestStreak = habits.reduce(
        (max, habit) => Math.max(max, calculateStreak(habit.history)),
        0
    );

    return {
        completedToday,
        completionRate,
        totalCompleted,
        longestStreak
    };
}