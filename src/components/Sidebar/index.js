import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar({ user }) {
    return (
        <aside className={styles.sidebar}>
            <div className={`${styles.menuItem} ${styles.active}`}>
                <span className={styles.icon}>[D]</span> Dashboard
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>[T]</span> Trilhas
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>[C]</span> Cursos
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>[L]</span> Live Coding
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>[#]</span> Comunidade
            </div>
            
            <div className={styles.divider}></div>

            <div className={styles.menuItem}>
                <span className={styles.icon}>[+]</span> Certificados
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>[?]</span> Suporte
            </div>

            <div className={styles.userStats}>
                <div className={styles.statRow}>
                    <span>Nível:</span>
                    <span className={styles.statValue}>{user ? user.level : 0}</span>
                </div>
                <div className={styles.statRow}>
                    <span>XP Total:</span>
                    <span className={styles.statValue}>{user ? user.xp : 0}</span>
                </div>
                <div className={styles.statRow}>
                    <span>Ofensiva:</span>
                    <span className={styles.statValue}>{user ? user.streak : 0} dias 🔥</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;