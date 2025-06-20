import { useState } from 'react';
import style from './taskList.module.css'
import { HiMiniTrash } from "react-icons/hi2";

function TasksList() {
  // Состояние для принудительного обновления списка
  const [updateTrigger, setUpdateTrigger] = useState(0);

  // Функция изъятия данных из local storage
  const getTasks = () => {
    const tasks = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      
      const item = localStorage.getItem(key);
      if (!item) continue;
      
      try {
        const task = JSON.parse(item);
        if (task && task.name) {
          tasks.push({ ...task, storageKey: key });
        }
      } catch (e) {
        console.error('Ошибка парсинга задачи', e);
      }
    }
    return tasks;
  };

  const handleDeleteTask = (storageKey: string) => {
    localStorage.removeItem(storageKey);
    setUpdateTrigger(prev => prev + 1);
  };
// Создание задачи
  const renderTasks = () => {
    const tasks = getTasks();
    return tasks.map((task) => (
      <div key={task.storageKey} className={`${style.container} nunito`}>
        <div>
          <h3 className={style.h1} title={task.name}>{task.name}</h3>
        </div>
        <div>
          <p>{task.description || 'Нет описания'}</p>
        </div>
        <button 
          onClick={() => handleDeleteTask(task.storageKey)}
          className={style.deleteButn}
          aria-label="Удалить задачу"
        >
          <HiMiniTrash />
        </button>
      </div>
    ));
  };

  return <div className={style.taskList}>{renderTasks()}</div>;
}

export default TasksList;