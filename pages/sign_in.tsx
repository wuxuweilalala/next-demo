import {NextPage} from 'next';
import {useCallback, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

const SignIn: NextPage = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: [], password: [],
    });
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        axios.post('/api/v1/sessions', signUpData).then(() => {
        }, (err) => {
            if (err.response) {
                const response: AxiosResponse = err.response;
                if (response.status === 422) {
                    setErrors(response.data);
                }
            }
        });
    }, [signUpData]);
    return (
        <>
            <h1>登录</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>用户名
                        <input type="text"
                               value={signUpData.username}
                               onChange={e => setSignUpData({...signUpData, username: e.target.value})}/></label>
                    {errors.username?.length > 0 && <div>
                        {errors.username.join(',')}
                    </div>}
                </div>
                <div>
                    <label>密码
                        <input type="password"
                               value={signUpData.password}
                               onChange={e => setSignUpData({...signUpData, password: e.target.value})}/></label>
                    {errors.password?.length > 0 && <div>
                        {errors.password.join(',')}
                    </div>}
                </div>
                <div>
                    <button type="submit">登录</button>
                </div>
            </form>

        </>
    );
};

export default SignIn;