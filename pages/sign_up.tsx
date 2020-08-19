import {NextPage} from 'next';
import {useCallback, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

const SignUp: NextPage = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        passwordConfirm: ''
    });
    const [errors, setErrors] = useState({
        username: [], password: [], passwordConfirm: []
    });
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        axios.post('/api/v1/users', signUpData).then(() => {
            alert('注册成功')
        }, (err) => {
            if (err.response) {
                const response: AxiosResponse = err.response;
                if (response.status === 422) {
                    setErrors({...errors, ...response.data});
                }
            }
        });
        console.log(signUpData);
    }, [signUpData]);
    return (
        <>
            {JSON.stringify(signUpData)}
            {JSON.stringify(errors)}
            <h1>注册</h1>
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
                    <label>确认密码
                        <input type="password"
                               value={signUpData.passwordConfirm}
                               onChange={e => setSignUpData({...signUpData, passwordConfirm: e.target.value})}/></label>
                    {errors.passwordConfirm?.length > 0 && <div>
                        {errors.passwordConfirm.join(',')}
                    </div>}
                </div>
                <div>
                    <button type="submit">注册</button>
                </div>
            </form>

        </>
    );
};

export default SignUp;