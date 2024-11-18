const MyButton = (props : any) => {
    return (
        <button className={`button ${props.className}`}>
            {...props}
        </button>
    )
}

export default MyButton;