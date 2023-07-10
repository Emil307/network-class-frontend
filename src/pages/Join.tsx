import React from "react";
import styles from "./styles.module.css";
import logo from "../../public/icons/logo.svg";
import createClass from "../../public/icons/create-class2.svg";
import search from "../../public/icons/search2.svg";
import settings from "../../public/icons/settings.svg";
import topPattern from "../../public/icons/top-pattern.svg";
import bottomPattern from "../../public/icons/bottom-pattern.svg";
import monitor from "../../public/icons/monitor.svg";
import people from "../../public/icons/people.svg";

const Join: React.FC = () => {
  return (
    <div className={styles.Join}>
      <div className={styles.leftSide}>
        <header className={styles.header}>
          <img src={logo} alt="Логотип" />
          <div className={styles.titleApp}>Сетевой учебный класс</div>
          <button className={styles.enterAccount}>Войти</button>
        </header>
        <main className={styles.main}>
          <div className={styles.titleMotivation}>Учиться стало еще проще!</div>
          <div className={styles.textMotivation}>
            Комфортная видеосвязь, качественное проведение уроков, контроль
            выполнения заданий – всё это и не только в одном приложении!
          </div>
          <form
            action="#"
            method="get"
            autoComplete="on"
            className={styles.formEnter}
          >
            <input type="text" name="link" placeholder="Ссылка на класс" />
            <button type="submit">Присоединиться</button>
          </form>
          <div className={styles.functions}>
            <a href="/lobby" className={styles.function}>
              <img src={createClass} alt="+" />
              <div className={styles.titleFunction}>Новый класс</div>
              <div className={styles.descriptionFunction}>
                Создать свой класс и провести занятие онлайн
              </div>
            </a>
            <a href="/lobby" className={styles.function}>
              <img src={search} alt="o" />
              <div className={styles.titleFunction}>Поиск</div>
              <div className={styles.descriptionFunction}>
                Найти класс и получить новые знания
              </div>
            </a>
            <div className={styles.function}>
              <img src={settings} alt="icon-settings" />
              <div className={styles.titleFunction}>Настройки</div>
              <div className={styles.descriptionFunction}>
                Редактировать свой профиль и классы
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.topPattern}>
          <img src={topPattern} alt="top-pattern" />
        </div>
        <div className={styles.appearanceApp}>
          <div>
            <div className={styles.monitorIcon1}>
              <img src={monitor} alt="monitor-icon" />
            </div>
            <div className={styles.monitorIcon2}>
              <img src={monitor} alt="monitor-icon" />
            </div>
            <div className={styles.monitorIcon3}>
              <img src={monitor} alt="monitor-icon" />
            </div>
            <div className={styles.peopleIcon}>
              <img src={people} alt="people" />
            </div>
          </div>
        </div>
        <div className={styles.bottomPattern}>
          <img src={bottomPattern} alt="bottom-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Join;
