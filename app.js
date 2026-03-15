// База данных заданий на основе спецификации ВПР
const tasks = [
    { id: 1, title: "Целые числа" },
    { id: 2, title: "Обыкновенные и десятичные дроби" },
    { id: 3, title: "Часть от числа" },
    { id: 4, title: "Анализ диаграмм" },
    { id: 5, title: "Проценты" },
    { id: 6, title: "Буквенные выражения и модуль" },
    { id: 7, title: "Координатная прямая" },
    { id: 8, title: "Линейные уравнения" },
    { id: 9, title: "Текстовая задача (арифметика)" },
    { id: 10, title: "Логические утверждения" },
    { id: 11, title: "Оси симметрии" },
    { id: 12, title: "Задачи на движение и работу" },
    { id: 13, title: "Сложные выражения с дробями" },
    { id: 14, title: "Окружность и площадь" },
    { id: 15, title: "Делимость и простые числа" },
    { id: 16, title: "Текстовая задача (проценты и части)" },
    { id: 17, title: "Логика и цифры числа" }
];

// Инициализация меню при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const menuGrid = document.getElementById("menuGrid");
    
    // Считываем сохраненный прогресс из браузера
    const progress = JSON.parse(localStorage.getItem('vpr_progress')) || {};

    tasks.forEach(task => {
        const card = document.createElement("div");
        card.className = "task-card";
        
        // Если задание выполнено, добавляем специальный CSS-класс
        if (progress[task.id]) {
            card.classList.add("completed");
        }

        card.onclick = () => window.location.href = `tasks/task_${task.id}/index.html`;

        // Добавляем галочку, если задание решено
        const statusHtml = progress[task.id] 
            ? '<div class="check-mark">✅ Выполнено</div>' 
            : '';

        card.innerHTML = `
            <span class="task-number">${task.id}</span>
            <span class="task-title">${task.title}</span>
            ${statusHtml}
        `;
        
        menuGrid.appendChild(card);
    });
});

// Запуск полного варианта
function startExam() {
    // Здесь позже добавим логику запуска режима симуляции
    alert("Скоро здесь будет запускаться полный вариант ВПР на 90 минут!");
}