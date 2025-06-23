import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import styles from './taskManager.module.css';

interface TaskData {
  name: string;
  description: string;
  img: string; // base64 строка
}

function TaskManager() {
  const { t } = useTranslation();
  const [taskData, setTaskData] = useState<TaskData>({
    name: '',
    description: '',
    img: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setTaskData(prev => ({
        ...prev,
        img: reader.result as string
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskId = Date.now().toString();
    const createdAt = new Date().toISOString(); // Добавление даты

    localStorage.setItem(taskId, JSON.stringify({
      ...taskData,
      id: taskId,
      date: createdAt // ← ВСТАВЛЕННОЕ ПОЛЕ ДАТЫ
    }));

    setTaskData({
      name: '',
      description: '',
      img: '',
    });

    window.location.reload();
  };

  return (
    <div className={styles.containerBox}>
      <div className={`${styles.container} nunito`}>
        <p>{t("Create new task:")}</p>
        <form onSubmit={handleSubmit} className={styles.formData}>
          <input
            type="text"
            name="name"
            placeholder={t('task name')}
            value={taskData.name}
            onChange={handleInputChange}
            required
            className={`${styles.inputs} nunito`}
          />
          <input
            type="text"
            name="description"
            placeholder={t('description')}
            value={taskData.description}
            onChange={handleInputChange}
            className={`${styles.inputs} nunito`}
          />
          <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={`${styles.imgInput} nunito`}
          />
          <button type="submit" className={`${styles.button} nunito`}>{t("Create")}</button>
        </form>
      </div>
      <div className={`${styles.info} nunito`}>
        <h1>{t("greeting!")}</h1>
        <p>{t("myInfo")}</p>
        <p>{t("gl")} <i>P.S. {t("myName")}</i></p>
      </div>
    </div>
  );
}

export default TaskManager;
