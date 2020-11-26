Executing (default): DROP TABLE IF EXISTS `orderItems`;
Executing (default): DROP TABLE IF EXISTS `orders`;
Executing (default): DROP TABLE IF EXISTS `payStatuses`;
Executing (default): DROP TABLE IF EXISTS `orderStatuses`;
Executing (default): DROP TABLE IF EXISTS `products`;
Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): DROP TABLE IF EXISTS `users`;
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255), `email` VARCHAR(255) UNIQUE, `adress` VARCHAR(255), `phone` VARCHAR(255), `password` VARCHAR(255), `admin` INTEGER(1), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`
Executing (default): DROP TABLE IF EXISTS `products`;
Executing (default): CREATE TABLE IF NOT EXISTS `products` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `price` DOUBLE PRECISION NOT NULL, `imageUrl` VARCHAR(255) NOT NULL, `description` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `userId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `products`
Executing (default): DROP TABLE IF EXISTS `orderStatuses`;
Executing (default): CREATE TABLE IF NOT EXISTS `orderStatuses` (`id` INTEGER auto_increment , `status` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `orderStatuses`
Executing (default): DROP TABLE IF EXISTS `payStatuses`;
Executing (default): CREATE TABLE IF NOT EXISTS `payStatuses` (`id` INTEGER auto_increment , `pay_type` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `payStatuses`
Executing (default): DROP TABLE IF EXISTS `orders`;
Executing (default): CREATE TABLE IF NOT EXISTS `orders` (`id` INTEGER auto_increment , `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `userId` INTEGER, `orderStatusId` INTEGER, `payStatusId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, FOREIGN KEY (`orderStatusId`) REFERENCES `orderStatuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, FOREIGN KEY (`payStatusId`) REFERENCES `payStatuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `orders`
Executing (default): DROP TABLE IF EXISTS `orderItems`;
Executing (default): CREATE TABLE IF NOT EXISTS `orderItems` (`id` INTEGER auto_increment , `quantity` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `orderId` INTEGER, `productId` INTEGER, UNIQUE `orderItems_productId_orderId_unique` (`orderId`, `productId`), PRIMARY KEY (`id`), FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;