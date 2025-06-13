import styles from "./style.module.scss";
import { FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";
export const ItemRepo = ({ repo, removeRepo }) => {
  return (
    <div className={styles.itemBox}>
      <div className={styles.text}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
      </div>
      <div className={styles.icons}>
        <a rel="noreferrer" href={repo.html_url} target="_blank">
          <FaExternalLinkAlt className={styles.link} />
        </a>
        <FaTrashAlt onClick={removeRepo} />
      </div>
    </div>
  );
};
