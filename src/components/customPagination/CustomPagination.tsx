import classes from "./customPagination.module.scss"

type Props = {
    currentPage: number,
    totalPages: number,
    onChange: (value: number) => void
}

export const CustomPagination = ({ currentPage, totalPages, onChange }: Props) => {
    const handleNextClick = () => (currentPage >= 1) && onChange(currentPage + 1)
    const handlePrevClick = () => currentPage <= totalPages && onChange(currentPage - 1)

    return (
        <div className={classes.pagination}>
            <button onClick={handlePrevClick} disabled={currentPage === 1}>
                ← Prev
            </button>
            <button onClick={handleNextClick} disabled={currentPage === totalPages}>
                Next →
            </button>
        </div>
    )
}