/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `CoffeeShop` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `CoffeeShopPhoto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Category.slug_unique" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShop.name_unique" ON "CoffeeShop"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShopPhoto.url_unique" ON "CoffeeShopPhoto"("url");
