import { BiError } from "react-icons/bi";
import styles from "./error.module.css"
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className={styles.errorPage}>
        <div className={styles.container}>
          <BiError className={styles.errorIcon} />
          <p className={`${styles.errorMessage} nunito`}>error / ошибка</p>
          <Link to="/" className={`${styles.helpLink} nunito`}>
           нажми на меня / click me!!
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error;