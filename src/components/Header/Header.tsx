import useTelegram from '../hooks/useTelegram'
import './Header.css'

const Header = () => {
    const {tg} = useTelegram()
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