import {MigrationInterface, QueryRunner} from "typeorm";

export class addTareaStatus1713799859663 implements MigrationInterface {
    name = 'addTareaStatus1713799859663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tarea" ("id" SERIAL NOT NULL, "detail_tarea" character varying, "statusId" integer, CONSTRAINT "PK_52df0f8fc74f81d0531ad890f0e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "detail_status" character varying, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tarea" ADD CONSTRAINT "FK_9ad6af46a8917077036e07431c4" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tarea" DROP CONSTRAINT "FK_9ad6af46a8917077036e07431c4"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "tarea"`);
    }

}
