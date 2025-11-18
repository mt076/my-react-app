import React from 'react';
import styles from './Header.module.css';

function Header({ onSearch }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                DataMind
            </div>
            <div className={styles.searchBox}>
                <input 
                    type="text" 
                    placeholder="Busque por Python, IA, ou Machine Learning..."
                    className={styles.input}
                    onChange={(e) => onSearch && onSearch(e.target.value)}
                />
            </div>
        </header>
    );
}

export default Header;