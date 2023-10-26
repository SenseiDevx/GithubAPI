import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';
import MoonIcon from '../../assets/icon-moon.svg';
import SunIcon from '../../assets/icon-sun.svg';

export const ThemeSwitcher = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDark, setDark] = useState(prefersDarkMode);

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <div className={styles.switcher} onClick={() => setDark(!isDark)}>
            <span>{isDark ? 'Light' : 'Dark'}</span>
            <div className={styles.icon}>
                <img src={isDark ? SunIcon : MoonIcon} alt="Theme Icon" />
            </div>
        </div>
    );
};
