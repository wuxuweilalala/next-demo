import {NextPage} from 'next';
import {useCallback, useState} from 'react';
import axios from 'axios'

const SignUp: NextPage = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        passwordConfirm: ''
    });
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        axios.post('/api/v1/users',signUpData)
        console.log(signUpData);
    }, [signUpData]);
    return (
        <>
            {JSON.stringify(signUpData)}
            <h1>注册</h1>
                <form onSubmit={onSubmit}>
                    <div>

                    <label>用户名
                        <input type="text"
                               value={signUpData.username}
                               onChange={e => setSignUpData({...signUpData, username: e.target.value})}/></label>
                    </div>
                    <div>
                    <label>密码
                        <input type="password"
                               value={signUpData.password}
                               onChange={e => setSignUpData({...signUpData, password: e.target.value})}/></label>
                    </div>
                    <div>
                    <label>确认密码
                        <input type="password"
                               value={signUpData.passwordConfirm}
                               onChange={e => setSignUpData({...signUpData, passwordConfirm: e.target.value})}/></label>
                    </div>
                    <div>
                        <button type="submit">注册</button>
                    </div>
                </form>

        </>
    );
};

export default SignUp;