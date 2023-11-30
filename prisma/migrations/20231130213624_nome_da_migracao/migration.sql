/*
  Warnings:

  - The values [TREINEE] on the enum `PositionName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PositionName_new" AS ENUM ('DIRETOR', 'MESA', 'CAM2', 'CAM3', 'CAM4', 'CAM5', 'CAM6', 'ADICIONAL', 'BACKSTAGE');
ALTER TABLE "ServiceUser" ALTER COLUMN "positionName" TYPE "PositionName_new" USING ("positionName"::text::"PositionName_new");
ALTER TYPE "PositionName" RENAME TO "PositionName_old";
ALTER TYPE "PositionName_new" RENAME TO "PositionName";
DROP TYPE "PositionName_old";
COMMIT;
