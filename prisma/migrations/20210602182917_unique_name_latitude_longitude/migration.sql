/*
  Warnings:

  - A unique constraint covering the columns `[name,latitude,longitude]` on the table `CoffeeShop` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CoffeeShop.name_unique";

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShop.name_latitude_longitude_unique" ON "CoffeeShop"("name", "latitude", "longitude");
