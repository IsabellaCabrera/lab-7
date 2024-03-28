document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { name: 'Mercado', completed: false },
        { name: 'Estudiar Examen ', completed: false },
        { name: 'Lavar ropa', completed: true },
        { name: 'Hacer ejercicio', completed: false },
        { name: 'Sacar el perro', completed: false },
        { name: 'Leer Duna', completed: true },
        { name: 'Preparar la comida', completed: false },
        { name: 'Adelantar trabajos', completed: false },
        { name: 'Terminar cuadro', completed: false },
        { name: 'Arreglar lo de mañana', completed: true }
    ];

    const taskList = document.getElementById('task-list');
    const completedTasks = document.getElementById('completed-tasks');
    const pendingTasks = document.getElementById('pending-tasks');

    function renderTasks() {
        taskList.innerHTML = '';
        let completedCount = 0;

        tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.name;

            if (task.completed) {
                taskElement.classList.add('completed');
                completedCount++;
            }

            taskElement.addEventListener('click', () => {
                task.completed = !task.completed;
                renderTasks();
            });

            taskList.appendChild(taskElement);
        });

        completedTasks.textContent = completedCount;
        pendingTasks.textContent = tasks.length - completedCount;
    }

    renderTasks();
});
