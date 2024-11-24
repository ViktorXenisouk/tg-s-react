const useTelegram = () => {

    const tg:WebApp= window.Telegram.WebApp;

    const onClose = ()=>{
        tg?.close()
    }

    const onToggleButton = ()=>{
        if(tg?.MainButton.isVisible){
            tg?.MainButton.show()
        }else{
            tg?.MainButton.hide()
        }
    }

    return {
        onToggleButton:onToggleButton,
        tg:tg,
        user: tg?.initDataUnsafe.user,
        onClose:onClose,
    }
}

export default useTelegram;