import React, {useState} from 'react'
import { Container, TextBox, Button, Loader } from './../components'
import * as API from '../common/API/API'

function Login({ loggedin}) {
    const [loading, isLoading] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const onLogin = () => {
        isLoading(true);
        console.log(email);
        console.log(password);
        API.Login(email, password).then( async (response) => {
            isLoading(false);
            console.log(response);
            if(response.status != 200){
                alert('wrong username or password');
            }
            else{
                loggedin();
            }
        });
    }
    const onRegister = () => {

    }

    const emailChange = (emailString)=>{
        setemail(emailString);
    }

    const passwordChange = (passwordString)=>{
        setpassword(passwordString);
    }

    return (
        <form>
            <Container isBlock={true}>
                <TextBox placeHolder={'Username(Email)'} onChange={emailChange}/>
                <TextBox password={true} placeHolder={'password'}  onChange={passwordChange}/>
                <Button title='&nbsp;&nbsp;Login&nbsp;&nbsp;' onClick={onLogin} />
                <Button title='Register' onClick={onRegister} />
                {loading ?
                    <Container isCover={true}>
                        <Container isCenter={true}>
                            <Loader />
                        </Container>
                    </Container>
                    :
                    null
                }
            </Container>
        </form>
    )
}

export default Login
