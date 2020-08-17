import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../libs/getDatabaseConnection';
import {User} from '../../../src/entity/User';
const PostsIndex: NextApiHandler = async (req, res) => {
    const {username,password,passwordConfirm} = req.body
    res.statusCode = 200;
    const connection= await getDatabaseConnection();
    const user = new User();
    user.username = username;
    if(password !== passwordConfirm){
        const errors = {passwordConfirm:['密码不匹配']}
        res.statusCode = 422
        res.setHeader('Content-Type','application/json')
        res.json(JSON.stringify(errors))
        res.end()
    }

}

export default PostsIndex;