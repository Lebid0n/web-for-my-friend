import Header from '../components/header/header';
import { Suspense } from 'react';
import TaskManager from '../components/notesManager/NotesManager';
import TasksList from '../components/tasks/TasksList';

function Home() {
  // const { t, i18n } = useTranslation()

  return (
    <>
    <Suspense fallback="Loading...">
      <Header />
      <TaskManager />
      <TasksList />
    </Suspense>
    </>
  )
}

export default Home;