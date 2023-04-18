-- SJSU CMPE 138 Spring 2022 TEAM2
-- login and signup queries

SELECT * FROM student WHERE LOWER(email) = LOWER('email');

insert into student(first_name,last_name,email,password, col_id, dob, age, is_ambassdor) values('${req.body.fname}', '${req.body.lname}', '${req.body.email}', '${hash}', '${req.body.col_id}', '${formatted_dob}','${age}', '${is_ambassdor}')

SELECT * FROM clo WHERE name = '${req.body.name}';

SELECT * FROM provider WHERE name = '${req.body.name}';

insert into provider(name,password) values('${req.body.name}', '${hash}');

SELECT * FROM college WHERE col_id=${req.body.col_id};


---scholarship queries

SELECT * FROM scholarship;

SELECT * FROM scholarship where ${type}=${req.query.p_id | req.query.sc_id}

DELETE from scholarship where sc_id=${req.query.sc_id}


--notification queries

SELECT * FROM view_notification JOIN notification ON notification.n_id=view_notification.n_id WHERE view_notification.s_id=${req.body.s_id}


--application queries

SELECT app_id from application WHERE s_id=${req.body.s_id} AND sc_id=${req.body.sc_id};


SELECT * FROM application WHERE ${type}=${req.query.s_id | req.query.p_id | req.query.c_id | req.query.sc_id | req.query.app_id};

SELECT c_id, s_id, p_id from application where app_id=${req.body.app_id};

INSERT into payment(amt, col_id, s_id, c_id, app_id, p_id, pay_date) values(${req.body.amt}, ${col_id}, ${s_id}, ${c_id}, ${req.body.app_id}, ${p_id}, '${today}');


SELECT * FROM payment where app_id=${req.query.app_id};

UPDATE application set feedback='${req.body.feedback}', feedback_date='${today}' where app_id=${req.body.app_id};


UPDATE application set status='${req.body.status}', status_date='${today}' where app_id=${req.body.app_id}

-- student queries

SELECT * FROM student where s_id=${req.query.s_id}

SELECT * from profile where s_id=${req.query.s_id};

INSERT INTO profile(s_id, highest_qualification, family_annual_income, GPA)
                VALUES (${req.body.s_id}, '${req.body.high_qual}', ${req.body.fai}, ${req.body.gpa})

UPDATE profile SET highest_qualification='${req.body.high_qual}', family_annual_income=${req.body.fai}, GPA=${req.body.gpa} where s_id=${req.body.s_id}


UPDATE student SET email='${req.body.email}' where s_id=${req.body.s_id}

PDATE profile set is_clo_verified=1 where s_id=${req.query.s_id}

