import { selectError } from "@/app/appSlice";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import styles from './ErrorSnackBar.module.css'

export const ErrorSnackBar = () => {
    const error = useAppSelector(selectError)
    return (
        <div className={styles.errorSnackBar}>            
            {error}            
        </div>
    );
};