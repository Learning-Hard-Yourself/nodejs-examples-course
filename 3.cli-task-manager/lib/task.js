export function createTask(tasks, text) {
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0)

    return {
        id: maxId + 1,
        text,
        status: 'pending',
        createdAt: new Date().toISOString()
    }
}

export function addTask(tasks, text) {
    const newTask = createTask(tasks, text)
    const updatedTasks = [...tasks, newTask]

    return {
        tasks: updatedTasks,
        added: newTask
    }
}

export function completeTask(tasks, id) {
    const taskIndex = tasks.findIndex(task => task.id === id)

    if (taskIndex === -1) {
        return { tasks, completed: null }
    }

    const updatedTasks = tasks.map(task =>
        task.id === id
            ? { ...task, status: 'done' }
            : task
    )

    return {
        tasks: updatedTasks,
        completed: updatedTasks[taskIndex]
    }
}

export function deleteTask(tasks, id) {
    const task = tasks.find(t => t.id === id)

    if (!task) {
        return { tasks, deleted: null }
    }

    const updatedTasks = tasks.filter(t => t.id !== id)

    return {
        tasks: updatedTasks,
        deleted: task
    }
}

export function findTask(tasks, id) {
    return tasks.find(task => task.id === id)
}
