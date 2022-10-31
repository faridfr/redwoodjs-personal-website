/*
  Warnings:

  - You are about to drop the column `logo` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Experience` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "imageId" INTEGER,
    CONSTRAINT "User_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("id", "password", "username") SELECT "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE TABLE "new_Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "fromYear" TEXT,
    "toYear" TEXT,
    "imageId" INTEGER,
    CONSTRAINT "Education_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Education" ("description", "fromYear", "id", "title", "toYear") SELECT "description", "fromYear", "id", "title", "toYear" FROM "Education";
DROP TABLE "Education";
ALTER TABLE "new_Education" RENAME TO "Education";
CREATE TABLE "new_Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "imageId" INTEGER,
    "fromDateTime" DATETIME,
    "toDateTime" DATETIME,
    "location" TEXT,
    "description" TEXT,
    "percent" INTEGER,
    "category" TEXT,
    "active" BOOLEAN NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Experience_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Experience" ("active", "category", "description", "fromDateTime", "id", "location", "percent", "sort", "title", "toDateTime") SELECT "active", "category", "description", "fromDateTime", "id", "location", "percent", "sort", "title", "toDateTime" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "degree" TEXT,
    "percent" INTEGER,
    "category" TEXT,
    "active" BOOLEAN NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0,
    "imageId" INTEGER,
    CONSTRAINT "Skill_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("active", "category", "degree", "id", "name", "percent", "sort") SELECT "active", "category", "degree", "id", "name", "percent", "sort" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
