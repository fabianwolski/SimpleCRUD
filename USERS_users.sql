-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: USERS
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `mobile` int NOT NULL,
  `email` varchar(45) NOT NULL,
  `homelineone` varchar(45) NOT NULL,
  `homelinetwo` varchar(45) NOT NULL,
  `hometown` text NOT NULL,
  `homecounty` text NOT NULL,
  `homeeircode` varchar(45) NOT NULL,
  `shiplineone` varchar(45) NOT NULL,
  `shiplinetwo` varchar(45) NOT NULL,
  `shiptown` text NOT NULL,
  `shipcounty` varchar(45) NOT NULL,
  `shipeircode` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mr','john','woll',0,'abc@gmail.com','23 Dame Dash','Drive','Dublin 15','Dublin','D15','23 Dame Dash','Drive','Dublin','Dublin','D15'),(2,'mr','John','Wol',855134242,'fabianwolski@gmail.com','23 Dame Dash','Road','Dublin','Dublin','D15','23 Dame Dash','Road','Dublin','Dublin','D15'),(4,'Mrs','Katie','Pool',885134241,'katepool@gmail.com','21 Dingle Drive','','Drogheda','Meath','DRG12','21 Dingle Drive','','Drogheda','Meath','DRG12'),(5,'Mr','Wayne','Doh',85724721,'waynedoe@yahoo.com','12 feelfree avenue','','Galer','Galway','GG154','12 feelfree avenue','','Galer','Galway','GG154'),(6,'Mr','Nella','',855242431,'nellarose@gmail.com','09 Farmleigh','grove','lucan','Dublin','LC12A','09 Farmleigh','grove','lucan','Dublin','LC12A'),(8,'Ms','Emma','Jane',844134241,'emmajane@outlook.com','102 anfield','','Belly','Meath','C15','102 anfield','','Belly','Meath','C15'),(9,'Pig','John','Wol',885134241,'emmajane@outlook.com','12 feelfree avenue','Road','Dublin','Dublin','DRG12','23 Dame Dash','Road','Belly','Galway','C15'),(13,'Ms','Katie','Doh',885134241,'katepool@gmail.com','09 Farmleigh','grove','Barten','Meath','DRG12','09 Farmleigh','Road','Drogheda','Meath','GG154'),(14,'Ms','Katie','Doh',885134241,'katepool@gmail.com','09 Farmleigh','grove','Barten','Meath','DRG12','09 Farmleigh','Road','Drogheda','Meath','GG154'),(15,'Mrs','Wendie','Wol',855134242,'katepool@gmail.com','12 feelfree avenue','Road','Dublin','Dublin','GG154','23 Dame Dash','Road','Barten','Louth','C15'),(20,'Mr','John','Eagan',844134241,'waynedoe@yahoo.com','23 Dame Dash','Road','Barten','Louth','','81 darmalstreet','','Barten','Meath',''),(23,'Mr','Duplicate','Duplicate',999,'DuplicateDuplicate@gmail.com','Duplicate','Duplicate','Duplicate','Duplicate','Duplicate','Duplicate','Duplicate','Duplicate','Duplicate','Duplicate'),(24,'Mr','Fab','Fab',89678578,'google@gmail.com','2 d','ada','tas','Cafa','','afda','','afaf','fafs','afafs');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 12:22:44
