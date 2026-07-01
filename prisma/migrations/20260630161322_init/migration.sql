-- CreateTable
CREATE TABLE `Perfil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `identificador` VARCHAR(100) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `password` VARCHAR(60) NOT NULL,
    `perfilId` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_identificador_key`(`identificador`),
    INDEX `Usuario_perfilId_idx`(`perfilId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tipo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehiculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patente` VARCHAR(10) NOT NULL,
    `marca` VARCHAR(50) NOT NULL,
    `modelo` VARCHAR(50) NOT NULL,
    `valorDiario` INTEGER NOT NULL,
    `estado` VARCHAR(50) NOT NULL,
    `fotografia` VARCHAR(255) NOT NULL,
    `tipoId` INTEGER NOT NULL,

    UNIQUE INDEX `Vehiculo_patente_key`(`patente`),
    INDEX `Vehiculo_tipoId_idx`(`tipoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arriendo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rutCliente` VARCHAR(12) NOT NULL,
    `nombreCliente` VARCHAR(100) NOT NULL,
    `fechaInicio` DATETIME(3) NOT NULL,
    `fechaTermino` DATETIME(3) NOT NULL,
    `fechaHoraEntrega` DATETIME(3) NULL,
    `fechaHoraRecepcion` DATETIME(3) NULL,
    `fotoEntrega` VARCHAR(255) NULL,
    `fotoRecepcion` VARCHAR(255) NULL,
    `usuarioId` INTEGER NOT NULL,
    `vehiculoId` INTEGER NOT NULL,

    INDEX `Arriendo_usuarioId_idx`(`usuarioId`),
    INDEX `Arriendo_vehiculoId_idx`(`vehiculoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_perfilId_fkey` FOREIGN KEY (`perfilId`) REFERENCES `Perfil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehiculo` ADD CONSTRAINT `Vehiculo_tipoId_fkey` FOREIGN KEY (`tipoId`) REFERENCES `Tipo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Arriendo` ADD CONSTRAINT `Arriendo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Arriendo` ADD CONSTRAINT `Arriendo_vehiculoId_fkey` FOREIGN KEY (`vehiculoId`) REFERENCES `Vehiculo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
