import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1695163395800 implements MigrationInterface {
    name = 'Initial1695163395800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_roles_enum" AS ENUM('ADMIN', 'CUSTOMER')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{CUSTOMER}', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")); COMMENT ON COLUMN "users"."created_at" IS 'created time'; COMMENT ON COLUMN "users"."updated_at" IS 'updated time'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_roles_enum"`);
    }

}
