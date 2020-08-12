import {createConnection, getConnectionManager} from 'typeorm';



const promise = (
    async function () {
        const manager = getConnectionManager()
        if(!manager.has('default')){
            return await createConnection()
        }else {
            const current = manager.get('default');
            if(current.isConnected){
                return current
            }else{
                return await createConnection()
            }
        }
    }
)()

export const getDatabaseConnection = async ()=>{
    return await promise;
}