import {MigrationInterface, QueryRunner, TableIndex} from 'typeorm';

export class AddUniuqueUsernameToUsers1597844644816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex('users',new TableIndex({
            name:'user_username',columnNames:['username'],isUnique:true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('users','username')
    }

}
