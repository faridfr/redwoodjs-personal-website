-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "degree" TEXT,
    "percent" INTEGER,
    "category" TEXT,
    "active" BOOLEAN NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0
);
