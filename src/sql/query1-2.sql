USE `data_kepegawaian`;

DROP TABLE IF EXISTS `employee_family`;
DROP TABLE IF EXISTS `education`;
DROP TABLE IF EXISTS `employee_profile`;
DROP TABLE IF EXISTS `employee`;

CREATE TABLE IF NOT EXISTS `employee`(
	 `PK id` 			INT PRIMARY KEY NOT NULL AUTO_INCREMENT
    ,`nik` 				CHAR(16)
    ,`name` 			VARCHAR(255)
    ,`is_active` 		BOOLEAN
    ,`start_date` 		DATE NOT NULL
    ,`end_date` 		DATE NOT NULL
    ,`created_by`		VARCHAR(255)
    ,`updated by`		VARCHAR(255)
    ,`created_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    ,`updated_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `employee_profile`(
	 `PK id`			INT PRIMARY KEY NOT NULL AUTO_INCREMENT
    ,`employee_id`		INT NOT NULL
    ,`place_of_birth`	VARCHAR(100)
    ,`date_of_birth`	DATE
    ,`gender`			ENUM('Laki-Laki','Perempuan')
    ,`is_married`		BOOLEAN
    ,`prof_pict`		VARCHAR(255)
    ,`created_by`		VARCHAR(255)
    ,`updated_by`		VARCHAR(255)
    ,`created_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    ,`updated_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ,FOREIGN KEY(`employee_id`) REFERENCES `employee`(`PK id`)
);

CREATE TABLE IF NOT EXISTS `education`(
	 `PK id`			INT PRIMARY KEY NOT NULL AUTO_INCREMENT
	,`employee_id`		INT NOT NULL
    ,`name`				VARCHAR(255)
    ,`level`			ENUM('TK', 'SD', 'SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor')
    ,`description`		VARCHAR(255) NOT NULL
    ,`created_by`		VARCHAR(255) NOT NULL
    ,`updated_by`		VARCHAR(255) NOT NULL
    ,`created_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    ,`updated_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ,FOREIGN KEY(`employee_id`) REFERENCES `employee`(`PK id`)
);

CREATE TABLE IF NOT EXISTS `employee_family`(
	 `PK id`			INT PRIMARY KEY NOT NULL AUTO_INCREMENT
	,`employee_id`		INT NOT NULL
    ,`name`				VARCHAR(255)
    ,`identifier`		VARCHAR(255)
    ,`job`				VARCHAR(255)
    ,`place_of_birth`	VARCHAR(255)
    ,`date_of_birth`	DATE
    ,`religion`			ENUM('Islam', 'Katolik', 'Buda', 'Protestan', 'Konghucu')
    ,`is_life`			BOOLEAN
    ,`is_divorced`		BOOLEAN
    ,`relation_status`	ENUM('Suami', 'Istri', 'Anak', 'Anak Sambung')
    ,`created_by`		VARCHAR(255)
    ,`updated_by`		VARCHAR(255)
    ,`created_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    ,`updated_at`		DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ,FOREIGN KEY(`employee_id`) REFERENCES `employee`(`PK id`)
);