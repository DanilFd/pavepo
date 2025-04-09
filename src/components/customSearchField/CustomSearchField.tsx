import classes from "./customSearchField.module.scss"

type Props = {
    value: string,
    setValue: (value: string) => void,
    placeholder?: string
}

export const CustomSearchField = ({ setValue, value, placeholder = '' }: Props) => {

    return (
        <input value={value} onChange={(e) => setValue(e.target.value)} className={classes.searchField} type="text" placeholder={placeholder} />
    )
}