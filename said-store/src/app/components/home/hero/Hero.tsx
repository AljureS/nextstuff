import styles from './Hero.module.css';
export const Hero = () => {
    console.log(styles);
    
    return (
        <section className={styles.Hero}>
            <h1>Welcome to Said Store</h1>
            <h2>zungita talla M</h2>
        </section>
    )
}