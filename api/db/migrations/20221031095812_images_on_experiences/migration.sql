/*
  Warnings:

  - You are about to drop the column `fromDateTime` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `toDateTime` on the `Experience` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ImagesOnExperiences" (
    "imageId" INTEGER NOT NULL,
    "experienceId" INTEGER NOT NULL,

    PRIMARY KEY ("imageId", "experienceId"),
    CONSTRAINT "ImagesOnExperiences_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ImagesOnExperiences_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageId" INTEGER,
    "fromDate" TEXT,
    "toDate" TEXT,
    "location" TEXT,
    "description" TEXT,
    "percent" INTEGER,
    "category" TEXT,
    "active" BOOLEAN NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Experience" ("active", "category", "description", "id", "imageId", "location", "percent", "sort") SELECT "active", "category", "description", "id", "imageId", "location", "percent", "sort" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
