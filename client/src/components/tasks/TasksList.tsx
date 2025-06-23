import { useState } from 'react';
import style from './taskList.module.css';
import { HiMiniTrash } from "react-icons/hi2";

function TasksList() {
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [showImageForKey, setShowImageForKey] = useState<string | null>(null);

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
    if (showImageForKey === storageKey) {
      setShowImageForKey(null);
    }
  };

  const toggleImageView = (storageKey: string) => {
    setShowImageForKey(prev => (prev === storageKey ? null : storageKey));
  };

  const renderTasks = () => {
    const tasks = getTasks();
    return tasks.map((task) => {
      const hasImage = Boolean(task.img);
      const formattedDate = task.date
        ? new Date(task.date).toLocaleString()
        : null;

      return (
        <div
          key={task.storageKey}
          className={`${style.container} nunito`}
          onClick={() => toggleImageView(task.storageKey)}
          style={{
            cursor: 'pointer',
            backgroundColor: hasImage ? 'rgb(124, 255, 124)' : undefined,
            borderColor: hasImage ? 'rgb(87, 177, 87)' : undefined,
          }}
          title="Двойной клик: показать/скрыть изображение"
        >
          <div>
            <h3 className={style.h1} title={task.name}>{task.name}</h3>

            {showImageForKey === task.storageKey && task.img ? (
              <img
                src={task.img}
                alt={task.name}
                className={style.previewImage}
                style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, objectFit: 'cover' }}
              />
            ) : (
              <>
                <p>{task.description || 'Нет описания'}</p>
                {formattedDate && (
                  <p className={style.date}>
                    <small>{formattedDate}</small>
                  </p>
                )}
              </>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteTask(task.storageKey);
            }}
            className={style.deleteButn}
            aria-label="Удалить задачу"
          >
            <HiMiniTrash />
          </button>
        </div>
      );
    });
  };

  return <div className={style.taskList}>{renderTasks()}</div>;
}

export default TasksList;
