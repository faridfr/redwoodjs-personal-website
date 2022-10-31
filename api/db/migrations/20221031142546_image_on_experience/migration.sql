/*
  Warnings:

  - The primary key for the `ImagesOnExperiences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `ImagesOnExperiences` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ImagesOnExperiences" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageId" INTEGER NOT NULL,
    "experienceId" INTEGER NOT NULL,
    CONSTRAINT "ImagesOnExperiences_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ImagesOnExperiences_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ImagesOnExperiences" ("experienceId", "imageId") SELECT "experienceId", "imageId" FROM "ImagesOnExperiences";
DROP TABLE "ImagesOnExperiences";
ALTER TABLE "new_ImagesOnExperiences" RENAME TO "ImagesOnExperiences";
CREATE UNIQUE INDEX "ImagesOnExperiences_imageId_experienceId_key" ON "ImagesOnExperiences"("imageId", "experienceId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
