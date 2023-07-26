import BackIcon from "../components/icons/back-icons"
import  styles from "./page.module.css"
interface DrinkPageProps {
    searchParams: {
        search: string
    }

}
export default function DrinkPage({searchParams} : DrinkPageProps){
    return(
        <main className={styles.main}>
            <header className={styles.header}>
                <button className={styles.backBtn}>
                    <BackIcon/>
                </button>
            
            <h1 className={styles.title}>lemon</h1>
            <div></div>
            </header>
            <div className={styles.cardList}></div>
        </main>
    )     
}