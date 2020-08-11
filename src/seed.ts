import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from './entity/User';
import {Post} from './entity/Post';
import {Comment} from './entity/Comment';


createConnection().then(async connection => {
    const {manager} = connection;
    const u1 = new User();
    u1.username = 'wuxuwei';
    u1.passwordDigest = '123456'
    await manager.save(u1)
    console.log(u1);

    const p1 = new Post()
    p1.title='firt blog'
    p1.content='good good study'
    p1.author=u1
    await manager.save(p1)
    console.log(p1);

    const c1 = new Comment();
    c1.user = u1;
    c1.post =p1;
    c1.content = 'day day up';
    await manager.save(c1);
    console.log(c1);
    await connection.close()
}).catch(error => console.log(error));
