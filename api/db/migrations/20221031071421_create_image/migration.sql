-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image_url" TEXT,
    "background_position" TEXT,
    "active" BOOLEAN NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0
);
