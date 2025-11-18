import styles from "./Header.module.css"
function Header(){
    return (
        <header className={styles.header}>
            <span className={styles.logo}>Senac-RJ</span>
        </header>
    )
}
export default Header;