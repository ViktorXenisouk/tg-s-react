
const webApp:WebApp = window.Telegram.WebApp;

const useUser = () => {

    const user = webApp.initDataUnsafe.user;

    return{
        user
    }
}