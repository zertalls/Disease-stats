type Props = {
    title: string
    className?: string
    onClick: () => void
};
export const Button = ({title, className, onClick}: Props) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button className={className} onClick={onClickHandler}>{title}</button>
    );
};