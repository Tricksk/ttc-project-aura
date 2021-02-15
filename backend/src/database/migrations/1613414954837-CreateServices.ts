import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServices1613414954837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'services',
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
                        name: 'duration',
                        type: 'integer',
                        isNullable: false
                    },
                    {
                        name: 'use_record',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'record_id',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('services');
    }

}
