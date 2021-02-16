import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateForeignKeys1613421084221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKeys('appointments',
            [
                new TableForeignKey({
                    name: 'FK_AppointmentService',
                    referencedTableName: 'services',
                    referencedColumnNames: ['id'],
                    columnNames: ['service_id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'CASCADE'
                }),
                new TableForeignKey({
                    name: 'FK_AppointmentClient',
                    referencedTableName: 'clients',
                    referencedColumnNames: ['id'],
                    columnNames: ['client_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }),
            ]
        );

        await queryRunner.createForeignKey('services',
            new TableForeignKey({
                name: 'FK_ServiceRecord',
                referencedTableName: 'records',
                referencedColumnNames: ['id'],
                columnNames: ['record_id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('appointments', 'FK_AppointmentService');
        await queryRunner.dropForeignKey('appointments', 'FK_AppointmentClient');

        await queryRunner.dropForeignKey('services', 'FK_ServiceRecord');
    }

}
