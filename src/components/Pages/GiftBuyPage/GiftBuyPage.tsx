import { useParams } from "react-router-dom"
import { getProductById } from "../../../core/server";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { useCallback, useEffect } from "react";
import useTelegram from "../../hooks/useTelegram";

const GiftBuyPage = () => {
    const { tg } = useTelegram()

    useEffect(() => {
        tg?.MainButton.show();
        tg?.MainButton.setParams({
            text: 'buy'
        })
    })

    const onMainButtonClick = useCallback(() => {

    }, [])

    useEffect(() => {
        tg?.onEvent('mainButtonClicked', onMainButtonClick)
        return () => {
            tg?.offEvent('mainButtonClicked', onMainButtonClick)
        }
    })

    const { id } = useParams();

    const data = getProductById(id as string)

    return (
        <div>
            {!data ? <ErrorPage /> :
                <div className="gift--container">
                    <div className="gift--img" style={{ backgroundImage: `url(${data.imgUrl})` }}></div>
                    <p>{data.discription}</p>
                    <h3>{data.title}</h3>
                    <p>{`${data.price.value} ${data.price.change}`}</p>
                </div>}
        </div>
    )
}

export { GiftBuyPage };