import './Header.css'

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
      }
    return (
        <div className={`header`}>
            <button onClick={onClose}></button>
            <span className={'user-name'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header;