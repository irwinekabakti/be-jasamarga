USE data_kepegawaian;

SELECT 
	 a.`PK id` AS employee_id
    ,a.nik, a.name
    ,(CASE
		WHEN a.is_active = 0 THEN 'FALSE'
        ELSE 'TRUE' 
	  END) AS is_active
    ,b.gender
    ,CONCAT(TIMESTAMPDIFF(YEAR, b.date_of_birth, CURDATE()), ' Years Old') AS age
    ,c.name AS school_name
    ,c.level
    ,CONCAT(
		(CASE
			WHEN b.is_married = FALSE THEN '-'
			WHEN b.is_married = TRUE AND b.gender = 'Laki-laki' THEN '1 Istri'
			WHEN b.is_married = TRUE AND b.gender = 'Perempuan' THEN '1 Suami'
		END), 
		(CASE
			WHEN b.is_married = FALSE THEN ''
            WHEN b.is_married = TRUE AND d.jumlah_anak = 0 THEN ''
			WHEN b.is_married = TRUE AND d.jumlah_anak > 0 THEN CONCAT(' & ',d.jumlah_anak,' Anak')
		END),
        (CASE
			WHEN b.is_married = FALSE THEN ''
            WHEN b.is_married = TRUE AND d.jumlah_anak_sambung = 0 THEN ''
			WHEN b.is_married = TRUE AND d.jumlah_anak_sambung > 0 THEN CONCAT(' & ',d.jumlah_anak,' Anak Sambung')
		END))
      AS family_data
FROM employee a
JOIN employee_profile b ON a.`PK id` = b.employee_id
JOIN education c ON a.`PK id` = c.employee_id
LEFT JOIN (SELECT a.employee_id, COUNT(a.relation_status) AS jumlah_anak, COUNT(b.relation_status) AS jumlah_anak_sambung
	FROM employee_family a
	LEFT JOIN employee_family b ON a.employee_id = b.employee_id AND b.relation_status = 'Anak Sambung'
	WHERE a.relation_status = 'Anak'
	GROUP BY a.employee_id) d ON a.`PK id` = d.employee_id
;