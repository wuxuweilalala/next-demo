import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from './entity/User';


createConnection().then(async connection => {
    const {manager} = connection;
    const u1 = new User();
    u1.username = 'wuxuwei';
    u1.passwordDigest = '123456'
    await manager.save(u1)
    console.log(u1);
    await connection.close()
}).catch(error => console.log(error));
