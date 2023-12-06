-- AlterTable
CREATE SEQUENCE serviceuser_position_seq;
ALTER TABLE "ServiceUser" ALTER COLUMN "position" SET DEFAULT nextval('serviceuser_position_seq');
ALTER SEQUENCE serviceuser_position_seq OWNED BY "ServiceUser"."position";
