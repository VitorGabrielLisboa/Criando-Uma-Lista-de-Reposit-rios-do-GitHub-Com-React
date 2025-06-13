import { Input } from "../Input/Input";
import { ItemRepo } from "../ItemRepo/ItemRepo";
import { api } from "../services/api";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";

export const Main = () => {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState(() => {
    const savedRepos = localStorage.getItem("repos");
    return savedRepos ? JSON.parse(savedRepos) : [];
  });

  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repos));
  }, [repos]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if (data.id) {
      const isDuplicate = repos.some((repo) => repo.id === data.id);
      if (!isDuplicate) {
        const newRepos = (prev) => [...prev, data];
        setRepos(newRepos);
      }
    }
    setCurrentRepo("");
  };

  const handleRemoveRepo = (repoId) => {
    const newRepos = repos.filter((repo) => repoId !== repo.id);
    setRepos(newRepos);
  };

  return (
    <main className={styles.main}>
      <Input
        className={styles.input}
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        onButtonClick={handleSearchRepo}
      />
      <div className={styles.content}>
        {repos.map((repo) => (
          <ItemRepo
            key={repo.id}
            repo={repo}
            removeRepo={() => handleRemoveRepo(repo.id)}
          />
        ))}
      </div>
    </main>
  );
};
