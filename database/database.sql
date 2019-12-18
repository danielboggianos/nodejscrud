CREATE SCHEMA IF NOT EXISTS `proyecto` DEFAULT CHARACTER SET utf8 ;
use proyecto;
-- Create the table in the specified schema
CREATE TABLE IF NOT EXISTS `proyecto`.`usuarios` (
  `usuarios_id` INT NOT NULL AUTO_INCREMENT,
  `usuarios_nombre` VARCHAR(100) NULL,
  `usuarios_apellidos` VARCHAR(100) NULL,
  `usuarios_correo` VARCHAR(100) NULL,
  `usuarios_user` VARCHAR(45) NULL,
  `usuarios_pass` VARCHAR(45) NULL,
  `usuarios_estado` INT(2) NOT NULL,
  PRIMARY KEY (`usuarios_id`));