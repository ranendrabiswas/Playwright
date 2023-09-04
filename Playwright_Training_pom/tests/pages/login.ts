class LoginPage {

    page: any;
    username_textbox : any;
    password_textbox: any ;
    login_button: any ;

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

}

export default LoginPage