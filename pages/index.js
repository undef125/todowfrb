import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TODO from "../components/TODO";

export default function Home() {
    return (
        <div className={styles.wholeContainer}>
            <div className={styles.heading}>Todo List With Firebase</div>

            <TODO></TODO>
        </div>
    );
}
