/*
  Warnings:

  - You are about to drop the column `imageId` on the `Experience` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "fromDate" TEXT,
    "toDate" TEXT,
    "location" TEXT,
    "description" TEXT,
    "percent" INTEGER,
    "category" TEXT,
    "active" BOOLEAN NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Experience" ("active", "category", "description", "fromDate", "id", "location", "percent", "sort", "title", "toDate") SELECT "active", "category", "description", "fromDate", "id", "location", "percent", "sort", "title", "toDate" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
