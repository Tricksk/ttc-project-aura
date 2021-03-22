import { hash } from 'bcryptjs';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1613415837519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'login',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        );

        const password = await hash('project-aura2021', 8)

        await queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into('users')
            .values({
                name: 'Admin',
                login: 'admin',
                password,
            })
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
