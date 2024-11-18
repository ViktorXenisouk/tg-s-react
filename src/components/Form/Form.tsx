import useTelegram from '../hooks/useTelegram';
import { useState } from 'react';
import './Form.css'

const Form = () => {
    const {tg,onClose,onToggleButton} = useTelegram();

    console.log(`${tg},${onClose},${onToggleButton}`)

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
        /*

    const { tg } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            city,
            subject,
        }
        tg?.sendData(JSON.stringify(data))
    },[country,city,subject])

    useEffect(() => {
        tg?.onEvent('mainButtonClicked',onSendData)
        return () => {
            tg?.offEvent('mainButtonClicked',onSendData)
        }
    },[])

    useEffect(() => {
        tg?.MainButton.setParams({
            text: 'Send data'
        })
    }, [])

    useEffect(() => {
        if (!country || !city) {
            tg?.MainButton.hide();
        }
        else {
            tg?.MainButton.show();
        }
    }, [country, city])
*/

    const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    }

    const onChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubject(e.target.value);
    }
    return (
        <div className="form">
            <h3>Write your data</h3>
            <input className="input"
                type="text"
                placeholder="country"
            />
            <input className="input"
                type="text"
                placeholder="city"
            />

            <select className="select">
                <option value="physical">Phys</option>
                <option value="legal">Legal</option>
            </select>

        </div>
    )
}

export default Form;