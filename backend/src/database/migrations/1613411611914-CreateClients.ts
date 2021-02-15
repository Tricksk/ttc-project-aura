import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClients1613411611914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'clients',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
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
                        name: 'sex',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'birthday',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'works_seated',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'cellphone',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'contact',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'contact_cellphone',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients');
    }

}
