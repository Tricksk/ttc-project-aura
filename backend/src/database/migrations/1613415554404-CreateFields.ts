import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFields1613415554404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'fields',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'ask',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'field_type',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'required',
                        type: 'boolean',
                        default: false,
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fields');
    }

}
