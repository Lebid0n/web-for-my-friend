import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import styles from "./accountManager.module.css"

interface TaskData {
  name: string;
  password: string;
}

function AccountManager() {
  const { t } = useTranslation();
  const [account, setAccount] = useState(false);
  const [taskData, setTaskData] = useState<TaskData>({
    name: '',
    password: ''
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
    setAccount(false);
  };

  return (
    <>
      {account ? (
        <div className={`${styles.accountManager} nunito`}>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t('userName')}
                value={taskData.name}
                onChange={handleInputChange}
                required
                className='nunito'
              />
              <input
                type="password"
                name="password"
                placeholder={t('userPaswrd')}
                value={taskData.password}
                onChange={handleInputChange}
                required
                className='nunito'
              />
              <button className={`${styles.butn} nunito`} type="submit">{t("Register")}</button>
            </form>
          </div>
        </div>
      ) : (
        <div className={`${styles.accountManager} nunito`}>
          <div className={styles.container}>
            <p>{t('userName')} {taskData.name}</p>
            <p>{t('userPaswrd')} {taskData.password}</p>
            <button className={`${styles.butn} nunito`} onClick={() => setAccount(true)}>{t('edit')}</button>
          <p className={styles.infoMessage}>(Регистрация это по большей части backend, а про backend вы можете прочитать в папке server.)</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AccountManager;