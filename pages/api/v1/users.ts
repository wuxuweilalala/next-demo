import {NextApiHandler} from 'next';
import {getDatabaseConnection} from '../../../libs/getDatabaseConnection';
import {User} from '../../../src/entity/User';

const PostsIndex: NextApiHandler = async (req, res) => {
    const {username, password, passwordConfirm} = req.body;
    const connection = await getDatabaseConnection();
    res.setHeader('Content-Type', 'application/json;charset=utf-8');


    const user = new User();
    user.username = username.trim();
    user.password = password;
    user.passwordConfirm = passwordConfirm;

    await user.validate();


    if (user.hasErrors()) {
        res.statusCode = 422;
        res.write(JSON.stringify(user.errors));
    } else {
        await connection.manager.save(user);
        res.statusCode = 200;
        res.write(JSON.stringify(user));
    }
    res.end();
};

export default PostsIndex;