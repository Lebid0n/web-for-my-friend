// react
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoLanguage } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
// css
import style from "./header.module.css"

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className={style.header}>
      <div className={`${style.logoContainer} nunito`}>
        <Link 
          to="/"
          className={style.logo}
        >
          <h1>{t('My notes')}</h1>
        </Link>
        <a href="https://en.wikipedia.org/wiki/Tatarstan">
         <img className={style.flag} src="https://cdn1.ozone.ru/s3/multimedia-v/6028264387.jpg" alt="Kazakstan flag" />
        </a>
      </div>
      <div className={style.container}>
        <div className={style.functionalButns}>
          <button onClick={() => {
            const newLang = i18n.language === 'en' ? 'ru' : 'en';
            i18n.changeLanguage(newLang);
          }}
          className={style.langButn}
          >
            <IoLanguage />
          </button>
          <Link 
            to="/authorization"
            state={{
              from: "/home"
            }}
            className={style.loginButn}
          >
            <CiLogin />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function WrappedHeader() {
  return (
    <Suspense fallback="Loading...">
      <Header />
    </Suspense>
  );
}