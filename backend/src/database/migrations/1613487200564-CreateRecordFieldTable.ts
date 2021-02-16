import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateRecordFieldTable1613487200564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'records_fields',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'record_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'field_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'order',
                        type: 'integer',
                        isNullable: false
                    }
                ]
            })
        );

        await queryRunner.createForeignKeys('records_fields',
            [
                new TableForeignKey({
                    name: 'FK_Records',
                    referencedTableName: 'records',
                    referencedColumnNames: ['id'],
                    columnNames: ['record_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }),
                new TableForeignKey({
                    name: 'FK_Fields',
                    referencedTableName: 'fields',
                    referencedColumnNames: ['id'],
                    columnNames: ['field_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }),
            ]
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('records_fields', 'FK_Records');
        await queryRunner.dropForeignKey('records_fields', 'FK_Fields');
        await queryRunner.dropTable('records_fields');
    }

}
