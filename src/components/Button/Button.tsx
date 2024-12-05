const MyButton = (props : any) => {
    return (
        <button {...props} className={`button ${props.className}`}>
        </button>
    )
}

export default MyButton;