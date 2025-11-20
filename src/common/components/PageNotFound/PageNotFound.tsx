import { paths } from "@/common/constants";
import { Link } from "react-router";
import styles from './PageNotFound.module.css';

export const PageNotFound = () => {
    return (
        <div className={styles.div}>
            <h1>Page not found</h1>  
            <h1>ERROR 404</h1> 
            <Link className={styles.link} to={paths.mainPage}>Вернуться на главную</Link>            
        </div>
    );
};