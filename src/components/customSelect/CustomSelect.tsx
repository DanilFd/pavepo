import classes from "./customSelect.module.scss"

type Props = {
    options: string[],
    value: string,
    onChange: (value: string) => void,
    isLoading: boolean,
}

export const CustomSelect = ({ onChange, options, value, isLoading }: Props) => {
    const renderOptions = () => {
        if (isLoading) {
            return (
                <option value="loading" disabled>
                    Loading...
                </option>
            )
        }

        return (
            <>
                <option value="">
                    All cities
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </>
        )
    }

    return (
        <div className={classes.customSelect}>
            <select
                value={isLoading ? "loading" : value}
                onChange={(e) => onChange(e.target.value)}
                disabled={isLoading}
            >
                {renderOptions()}
            </select>
        </div>
    )
}