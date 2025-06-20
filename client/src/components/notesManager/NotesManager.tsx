import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import styles from './taskManager.module.css'

interface TaskData {
  name: string;
  description: string;
}

function TaskManager() {
  const { t } = useTranslation();
  const [taskData, setTaskData] = useState<TaskData>({
    name: '',
    description: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const taskId = Date.now().toString();
    localStorage.setItem(taskId, JSON.stringify({
      ...taskData,
      id: taskId
    }));
    
    setTaskData({
      name: '',
      description: ''
    });

    window.location.reload();
  };

  return (
    <>
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
          <button type="submit" className={`${styles.button} nunito`}>{t("Create")}</button>
        </form>
      </div>
      <div className={`${styles.info} nunito`}>
        <h1>{t("greeting!")}</h1>
        <p>{t("myInfo")}</p>
        <p>{t("gl")} <i>P.S. {t("myName")}</i></p>
      </div>
    </div>
    </>
  );
}

export default TaskManager;