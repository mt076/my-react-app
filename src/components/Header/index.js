import React from 'react';
import styles from './Header.module.css';

function Header({ onSearch, user }) {
    // Calcula % de XP para o próximo nível
    const progressPercent = user ? (user.xp / user.nextLevelXp) * 100 : 0;

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <div className={styles.logo}>
                    DATA<span>MIND</span>
                </div>
                <div className={styles.searchBox}>
                    <input 
                        type="text" 
                        placeholder="> Pesquisar módulo..."
                        className={styles.input}
                        onChange={(e) => onSearch && onSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.userProfile}>
                <div className={styles.xpBarContainer}>
                    <span className={styles.xpLabel}>LVL {user?.level} - {user?.xp}/{user?.nextLevelXp} XP</span>
                    <div className={styles.progressBar}>
                        <div 
                            className={styles.progressFill} 
                            style={{width: `${progressPercent}%`}}
                        ></div>
                    </div>
                </div>
                {user && <img src={user.avatar} alt="User" className={styles.avatar} />}
            </div>
        </header>
    );
}

export default Header;