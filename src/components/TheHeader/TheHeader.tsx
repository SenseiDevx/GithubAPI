import styles from './TheHeader.module.scss';
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher.tsx";

export const TheHeader = () => (
    <div className={styles.header}>
        <div className={styles.logo}>
            dev finder
        </div>
        <ThemeSwitcher/>
    </div>
);
