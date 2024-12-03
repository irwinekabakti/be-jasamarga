USE data_kepegawaian;

SET autocommit = 0;

START TRANSACTION;
INSERT INTO employee(nik, name, is_active, start_date, end_date)
VALUES('11012', 'Budi', TRUE, '2022-12-12', '2029-12-12')
,('11013', 'Jarot', TRUE, '2021-09-01', '2028-09-01')
;

SELECT * FROM employee;

INSERT INTO education(employee_id, name, level, description, created_by, updated_by)
VALUES(1, 'SMKN 7 Jakarta', 'SMA', 'Sekolah Menengah Atas', 'admin', 'admin')
,(2, 'Universitas Negeri Jakarta', 'Strata 1', 'Sarjana', 'admin', 'admin')
;

SELECT * FROM education;

INSERT INTO employee_profile(employee_id, place_of_birth ,date_of_birth, gender, is_married, prof_pict, created_by, updated_by)
VALUES(1, 'Jakarta', '1997-05-02', 'Laki-laki', TRUE, NULL, 'admin', 'admin')
,(2, 'Sukabumi', '1996-05-02', 'Laki-laki', FALSE, NULL, 'admin', 'admin')
;

SELECT * FROM employee_profile;

INSERT INTO employee_family(employee_id, name, identifier, job, place_of_birth, date_of_birth, religion, is_life, is_divorced, relation_status, created_by, updated_by)
VALUES(1, 'Marni', '32100594109960002', 'Ibu Rumah Tangga', 'Denpasar', '1995-10-17', 'Islam', TRUE, FALSE, 'Istri', 'admin', 'admin')
,(1, 'Clara', '32100594109020004', 'Pelajar	', 'Bangkalan', '2008-10-17', 'Islam', TRUE, FALSE, 'Anak', 'admin', 'admin')
,(1, 'Stephanie', '32100594109020004', 'Pelajar	', 'Bangkalan', '2008-10-17', 'Islam', TRUE, FALSE, 'Anak', 'admin', 'admin')
;

SELECT * FROM employee_family;
-- ROLLBACK;
COMMIT;