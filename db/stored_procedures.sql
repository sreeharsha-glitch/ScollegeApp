-- SJSU CMPE 138 Spring 2022 TEAM2
-- notification
DROP PROCEDURE IF EXISTS notification;

delimiter //
create procedure notification()
begin
select nt.n_id,nf.e_id,nf.s_id,nt.content
from notification as nt join notify as nf on nt.n_id=nf.n_id;
end //
delimiter ;


-- send_notification_from_ambassador
DROP PROCEDURE IF EXISTS  send_notification_from_ambassabor;

delimiter //
create procedure send_notification_from_ambassabor()
begin
select e.e_id,e.time,e.location,e.purpose,n.content
from `events` as e join notify as n on e.e_id=n.e_id;
end //
delimiter ;



-- create scholarship
DROP PROCEDURE IF EXISTS  create_scholarship;

delimiter //
create procedure create_scholarship(
IN `name` varchar(200),
IN amount bigint,
IN deadline date,
IN purpose varchar(200),
IN p_id char(9))
begin
insert into scholarship(`name`,amount,deadline,purpose,p_id)
values(`name`,amount,deadline,purpose,p_id);
end // 
delimiter ;



-- verified_student_list
DROP PROCEDURE IF EXISTS verified_student_list;

delimiter //
create procedure verified_student_list(
    IN college_id int(9) 
)
begin 
select s.s_id,s.first_name,s.last_name,p.is_clo_verified, s.col_id, s.age
from student s join `profile` p on s.s_id=p.s_id 
where col_id = college_id AND is_clo_verified = 1;
end //
delimiter ;

-- unverified_student_list
DROP PROCEDURE IF EXISTS unverified_student_list;

delimiter //
create procedure unverified_student_list(
    IN college_id int(9) 
)
begin 
select s.s_id,s.first_name,s.last_name,p.is_clo_verified, s.col_id, s.age
from student s join `profile` p on s.s_id=p.s_id 
where col_id = college_id AND is_clo_verified = 0;
end //
delimiter ;




-- events organized by ambassdor

DROP PROCEDURE IF EXISTS events_organized_by_amb;
DELIMITER //
CREATE PROCEDURE events_organized_by_amb(
IN ambassdor_id char(9))
BEGIN
SELECT O.e_id, O.s_id, E.time , E.date , E.location, E.purpose FROM organizes AS O
JOIN `events`  AS E 
ON O.e_id = E.e_id 
AND s_id = ambassdor_id;
end //
delimiter ;



DROP PROCEDURE IF EXISTS create_event;
-- create events 
DELIMITER //
CREATE PROCEDURE create_event(
IN `time` time,
IN `date` date,
IN location varchar(150) ,
IN purpose varchar(50))
BEGIN
insert into `events`(`time`,`date`,location,purpose)
values(`time`,`date`,location,purpose);
end //
delimiter ;

-- list all events

DROP PROCEDURE IF EXISTS list_events;
DELIMITER //
CREATE PROCEDURE list_events()
BEGIN
SELECT e_id, `time`, `date`, location, purpose 
FROM `events`;
end //
delimiter ;
CALL list_events;


DROP PROCEDURE IF EXISTS organize_events;
DELIMITER //
CREATE PROCEDURE organize_events(
IN event_id int(9),
IN ambassdor_id int(9))
BEGIN
INSERT into organizes (e_id, s_id)
VALUES (event_id, ambassdor_id);
end //
delimiter ;


DROP PROCEDURE IF EXISTS delete_event;
DELIMITER //
CREATE PROCEDURE delete_event(
IN event_id int(9))
BEGIN
DELETE FROM `events` WHERE e_id = event_id;
end //
delimiter ;

DROP PROCEDURE IF EXISTS update_event;
DELIMITER //
CREATE PROCEDURE update_event(
IN event_id int(9),
IN `time` time,
IN `date` date,
IN location varchar(150) ,
IN purpose varchar(50))
BEGIN
UPDATE `events`
SET `time` = `time` , `date` = `date` , location = location, purpose = purpose
WHERE e_id = event_id;
end //
delimiter ;

DROP PROCEDURE IF EXISTS update_scholarship;
-- update_scholarship
DELIMITER //
CREATE PROCEDURE update_scholarship(
IN id char(9),
IN scholarship_name varchar(200),
IN scholarship_amount bigint,
IN scholarship_deadline date,
IN schoalrship_purpose varchar(250)
)
BEGIN 
update scholarship
SET `name` = scholarship_name,
	amount = scholarship_amount,
    deadline = scholarship_deadline,
    purpose = schoalrship_purpose
WHERE sc_id = id;
END //
DELIMITER ;

-- create notification 
delimiter //
create procedure createNotification(IN n_id char(9), IN content varchar(200))
begin 
insert into notification(n_id,content)
values(n_id,content);
end // 
delimiter ;






DROP PROCEDURE IF EXISTS student_sign_up;
-- student_sign_up
DELIMITER //
CREATE PROCEDURE student_sign_up(
IN email varchar(200),
IN `password` varchar(200),
IN first_name varchar(200),
IN last_name varchar(200),
IN col_id char(9))
BEGIN
insert into student(first_name,last_name,email,`password`)
values(first_name,last_name,email,`password`);
end //
delimiter ;

DROP PROCEDURE IF EXISTS student_login;

-- student_login 
DELIMITER //
CREATE PROCEDURE student_login()
BEGIN 
select email,`password` 
from student;
END //
DELIMITER ;

-- update_profile
DROP PROCEDURE IF EXISTS update_profile;

DELIMITER //
CREATE PROCEDURE update_profile(
IN student_Id char(9),
IN Highest_Qualification varchar(200),
IN family_annual_income bigint,
IN GPA float(4),
IN is_clo_verified varchar(10))
BEGIN 
INSERT INTO `profile`(s_id,highest_qualification,family_annual_income,GPA,is_clo_verified)
VALUES(Student_Id,Highest_Qualification,family_annual_income,GPA,is_clo_verified);
END //
DELIMITER ;

-- view_profile
DROP PROCEDURE IF EXISTS view_profile;

DELIMITER //
CREATE PROCEDURE view_profile()
begin 
select s_id,highest_qualification,family_annual_income,GPA,is_clo_cerified
from `profile`;
end //
DELIMITER ;

-- view_scholarship
DROP PROCEDURE IF EXISTS view_scholarship;

delimiter //
create procedure view_scholarship()
begin
select sc_id,`name`,amount,deadline,purpose,p_id
from scholarship;
end //
delimiter ;


-- application_detail_page
DROP PROCEDURE IF EXISTS application_page;

delimiter //
create procedure application_page()
begin
select app_id,`date`,p_id,status_,feedback
from application;
end //
delimiter ;

-- verify_student_email
DROP PROCEDURE IF EXISTS verifyStudentEmail;

delimiter //
create procedure verifyStudentEmail(
	IN s_email varchar(255)
)
begin 
	select * 
    from student
    where s_email = email;
end //
delimiter ;

-- view_application
DROP PROCEDURE IF EXISTS  view_application;

delimiter //
create procedure view_application()
begin 
select p_id,sc_id,app_id,`date`,status_,feedback,status_date,feedback_date
from application;
end //
delimiter ;
 
submitted application list
DROP PROCEDURE IF EXISTS  student_submitted_application_list;

delimiter //
create procedure student_submitted_application_list()
begin
select s.s_id,a.app_id
from student s join app a on s.s_id = a.s_id;
end //
delimiter ;

-- list_of_signedup_students
DROP PROCEDURE IF EXISTS list_of_signedup_students;

delimiter //
create procedure list_of_signedup_students()
begin
select *
from student;
end //
delimiter ;

-- clo login page
DROP PROCEDURE IF EXISTS  clo_login;
delimiter //
create procedure clo_login()
begin 
select c_id,`password`
from clo;
end //
delimiter ;

provider login page
DROP PROCEDURE IF EXISTS  provider_login;
delimiter //
create procedure provider_login()
begin 
select p_id, `password`
from provider;
end //
delimiter ;
