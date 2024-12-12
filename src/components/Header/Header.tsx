import useTelegram from '../hooks/useTelegram';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { tg, user } = useTelegram()

    const onBackClick = () => {
        const path = location.pathname;
        if (path === '/' || navigate.length === 0) {
            tg?.close();
        }
        else {
            navigate(-1)
        }
    }

    useEffect(() => {
        tg?.BackButton.show();
        tg?.BackButton.onClick(onBackClick)
    })

    const onClose = () => {
        onBackClick();
    }

    return (
        <div className={`header`}>
            <button onClick={onClose}>Close</button>
            <span className={'user-name'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;