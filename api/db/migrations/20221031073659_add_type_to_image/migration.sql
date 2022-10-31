-- AlterTable
ALTER TABLE "Image" ADD COLUMN "category" TEXT;

-- CreateTable
CREATE TABLE "Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "logo" TEXT,
    "fromDateTime" DATETIME,
    "toDateTime" DATETIME,
    "location" TEXT,
    "description" TEXT,
    "percent" INTEGER,
    "category" TEXT,
    "active" BOOLEAN NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0
);
