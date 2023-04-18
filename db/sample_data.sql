-- SJSU CMPE 138 Spring 2022 TEAM2
use ScollegeApp;
SET FOREIGN_KEY_CHECKS=0;
SET SESSION SQL_MODE='ALLOW_INVALID_DATES';

insert into college (col_id, `name`) 
values 
( '102' , 'San Jose State University'),
( '141' , 'Santa Clara University'),
( '423' , 'Stanford University'),
( '489' , 'UC Berkeley'),
( '345' , 'University of San Francisco');

insert into student (`password`, s_id, first_name, last_name, email, age, DOB, col_id) 
values 
('64513E0B' , '28039' , 'Aaron' , 'James' , 'Aaron.James@gmail.com' , 23 , '1999-12-05' , '102'),
('1B903C9E' , '77501' , 'Tyler' , 'Morgan' , 'Tyler.Morgan@gmail.com' , 21 , '2001-03-24' , '141'),
('8ECDF536' , '96444' , 'Naya' , 'Bell' , 'Naya.Bell@gmail.com' , 19 , '2003-06-30' , '423'),
('5F58AA54' , '95398' , 'Ishaan' , 'Patel' , 'Ishaan.Patel@gmail.com' , 24 , '1998-10-25' , '489'),
('8D096951' , '43880' , 'Olivia' , 'Georgia' , 'Olivia.Georgia@gmail.com' , 20 , '2002-11-04' , '345'),
('05BE1797' , '83466' , 'Noah' , 'Wilson' , 'Noah.Wilson@gmail.com' , 21 , '2001-04-15' , '423'),
('14697CC8' , '26202' , 'Oliver' , 'Wilson' , 'Oliver.Wilson@gmail.com' , 21 , '2001-12-08' , '423'),
('52ED5DC6' , '86955' , 'Elijah' , 'Smith' , 'Elijah.Smith@gmail.com' , 22 , '2000-11-15' , '141'),
('4ED77902' , '29027' , 'Emma' , 'Shaw' , 'Emma.Shaw@gmail.com' , 24 , '1998-09-17' , '102'),
('225ABD61' , '89554' , 'Ava' , 'Campbell' , 'Ava.Campbell@gmail.com' , 21 , '2001-11-03' , '141'),
('F3A8774B' , '56171' , 'Charlotte' , 'Collins' , 'Charlotte.Collins@gmail.com' , 20 , '2002-02-13' , '489'),
('8FA5FCD2' , '38193' , 'Shyla' , 'Payne' , 'Shyla.Payne@gmail.com' , 23 , '1999-03-05' , '345'),
('CFE1A64B' , '34698' , 'Amar' , 'Singh' , 'Amar.Singh@gmail.com' , 22 , '2000-03-06' , '345'),
('3ADB3080' , '24378' , 'Diya' , 'Kumar' , 'Diya.Kumar@gmail.com' , 24 , '1998-10-30' , '102'),
('BE101435' , '34864' , 'Aiguo' , 'Li' , 'Aiguo.Li@gmail.com' , 24 , '1998-06-28' , '489'),
('EB4A6CA2' , '66805' , 'Isra' , 'Akbas' , 'Isra.Akbas@gmail.com' , 21 , '2001-07-28' , '345'),
('E741DB5D' , '33565' , 'Asnee' , 'Chen' , 'Asnee.Chen@gmail.com' , 19 , '2003-01-04' , '489'),
('D710E977' , '88078' , 'Melisa' , 'Rogers' , 'Melisa.Rogers@gmail.com' , 22 , '2000-02-08' , '102'),
('9728DDD9' , '49617' , 'Amida' , 'Esat' , 'Amida.Esat@gmail.com' , 24 , '1998-09-30' , '489'),
('BE125B60' , '80095' , 'Deniz' , 'Kaplan' , 'Deniz.Kaplan@gmail.com' , 23 , '1999-05-08' , '345'),
('C34D6B83' , '24362' , 'Myo' , 'Maung' , 'Myo.Maung@gmail.com' , 20 , '2002-02-06' , '423'),
('6DC9824E' , '49709' , 'Dewei' , 'Liu' , 'Dewei.Liu@gmail.com' , 21 , '2001-11-20' , '345'),
('12B97B5A' , '62393' , 'Emre' , 'Aydin' , 'Emre.Aydin@gmail.com' , 24 , '1998-04-16' , '141'),
('84433679' , '76268' , 'Olivia' , 'Patterson' , 'Olivia.Patterson@gmail.com' , 19 , '2003-03-20' , '102'),
('0EEB5C31' , '92122' , 'Evelyn' , 'Wong' , 'Evelyn.Wong@gmail.com' , 24 , '1998-06-09' , '423'),
('440773C6' , '61360' , 'Ananya' , 'Sharma' , 'Ananya.Sharma@gmail.com' , 19 , '2003-05-25' , '489'),
('AA68FE78' , '71763' , 'Alexander' , 'Davis' , 'Alexander.Davis@gmail.com' , 21 , '2001-02-11' , '345'),
('A4E82D22' , '35165' , 'Dilara' , 'Ahmadi' , 'Dilara.Ahmadi@gmail.com' , 24 , '1998-06-29' , '102'),
('533B3CC8' , '72154' , 'Sophia' , 'hunt' , 'Sophia.hunt@gmail.com' , 20 , '2002-03-14' , '345'),
('2EE5E209' , '63168' , 'Yara' , 'Silva' , 'Yara.Silva@gmail.com' , 24 , '1998-10-17' , '102');

insert into `profile` (s_id, prof_id, highest_qualification, family_annual_income, GPA, is_clo_verified) 
values 
('28039' , '73446890' , 'HSDG' , '107000' , '2.92' , 1),
('77501' , '74467366' , 'BA' , '202000' , '3.79' , 1),
('96444' , '20130408' , 'MA' , '175000' , '3.84' , 1),
('95398' , '21050636' , 'BS' , '148000' , '2.98' , 1),
('43880' , '84193915' , 'MS' , '239000' , '2.54' , 1),
('83466' , '80372482' , 'HSDG' , '211000' , '3.12' , 1),
('26202' , '38494913' , 'MA' , '179000' , '2.6' ,1 ),
('86955' , '84588260' , 'MS' , '249000' , '3.92' , 1),
('29027' , '43397332' , 'BS' , '35000' , '3.77' , 1),
('89554' , '55811044' , 'HSDG' , '141000' , '3.62' ,1 ),
('56171' , '64169191' , 'BA' , '274000' , '3.14' , 1),
('38193' , '24981213' , 'HSDG' , '198000' , '2.88' , 1),
('34698' , '51118516' , 'AA' , '109000' , '3.23' ,1 ),
('24378' , '19152784' , 'AAS' , '132000' , '3.66' ,1 ),
('34864' , '38841999' , 'BA' , '183000' , '2.52' , 1),
('66805' , '20174935' , 'MS' , '44000' , '2.84' , 1),
('33565' , '27082749' , 'HSDG' , '147000' , '3.13' , 1),
('88078' , '62515561' , 'B.Arch.' , '256000' , '3.26' ,1 ),
('49617' , '63505384' , 'BBA' , '192000' , '3.18' , 1),
('80095' , '46761238' , 'BS' , '78000' , '3.24' ,1 ),
('24362' , '97583502' , 'HSDG' , '193000' , '2.86' ,1),
('49709' , '68535158' , 'HSDG' , '244000' , '3.38' ,1 ),
('62393' , '31797150' , 'BB' , '47000' , '3.54' ,1 ),
('76268' , '64507889' , 'MBA' , '53000' , '2.93' , 1),
('92122' , '38653648' , 'BFA' , '239000' , '3.71' , 1),
('61360' , '58548248' , 'AAA' , '82000' , '2.53' , 1),
('71763' , '59527403' , 'HSDG' , '196000' , '2.63' , 1),
('35165' , '11492193' , 'BS' , '144000' , '3.19' ,1 ),
('72154' , '48973179' , 'HSDG' , '69000' , '3.54' ,1 ),
('63168' , '88521910' , 'HSDG' , '289000' , '3.59' , 1);

insert into `events` (e_id, `time`, `date`, location, purpose) 
values 
('9074' , '15:33:00' , '2022-01-22' , 'SF Arts Center' , 'Community Service Scholarship Introduction'),
('8211' , '20:29:00' , '2022-10-06' , 'Student Union Theater' , 'LGBTQI+ Scholarship'),
('1501' , '11:28:00' , '2022-08-14' , 'SJSU Event Center' , 'Military Scholarship'),
('7628' , '16:36:00' , '2022-01-25' , 'Santa Clara University' , 'Lefties Society Scholarship'),
('1516' , '21:00:00' , '2022-10-09' , 'Studio Theater' , 'Musicians Scholarship Winners Acknowledgement'),
( '4770' , '17:41:00' , '2022-07-05' , 'Provident Credit Union Event Center' , 'Baseball Scholarship'),
( '8353' , '19:38:00' , '2022-11-26' , 'Louis B. Mayer Theater' , 'Military Service Scholarship Awards Ceremony'),
('7714' , '20:05:00' , '2022-05-19' , 'Cantor Arts Center' , 'Theater Scholarship Awards'),
( '8617' , '14:02:00' , '2022-02-01' , 'Student Union Theater' , 'Baseball Scholarship'),
( '7208' , '16:44:00' , '2022-06-04' , 'SJSU Concert Hall' , 'LGBTQI+ Scholarship'),
( '8233' , '20:23:00' , '2022-05-13' , 'UC Berkeley: University Club' , 'Tennis Scholarship'),
( '1411' , '15:29:00' , '2022-04-03' , 'Santa Clara University: Adobe Lodge' , 'Tennis Scholarship'),
( '3270' , '17:05:00' , '2022-02-23' , 'SJSU Event Center' , 'SWE Scholarship Meeting'),
( '5602' , '11:25:00' , '2022-09-17' , 'CEMEX Auditorium' , 'Academic Achievement Winners'),
( '8446' , '17:42:00' , '2022-05-24' , 'UC Berkeley: Pauley Ballroom' , 'California Athletic Grant Meeting');

insert into notify (n_id, e_id, s_id) 
values 
('251'  , '9074' , '24378'),
('849' , '9074' , '34864'),
('301' , '8446' , '77501'),
('914' , '9074' , '33565'),
('548' , '7714' , '95398'),
('932'  , '9074' , '92122'),
('983' , '7714' , '34698'),
('123' , '3270' , '49617'),
('124' , '5602' , '62393'),
('435' , '8446' , '28039');

insert into CLO (`password`, c_id, `name`, col_id) 
values 
('C9161BC6' , '297' , 'Franny Smith' , '102'),
('C22FEDFB' , '792' , 'Gregg Gianluca' , '102'),
('06225118' , '322' , 'Justino Piera' , '102'),
('760D40B8' , '292' , 'Fedor Arati' , '102'),
('E6D3FEDD' , '325' , 'Gaspar Sid' , '102'),
('275C04F9' , '464' , 'Lilianna Colman' , '141'),
('68B1E8EF' , '520' , 'Raine Zoya' , '141'),
('D785F7D8' , '229' , 'Aggie Gustaaf' , '141'),
('84FDA247' , '147' , 'Chema Celso' , '423'),
('BE0252DA' , '868' , 'Robena Siddhi' , '423'),
('3569C77D' , '620' , 'Chloe Homer' , '489'),
('A2DE3F76' , '348' , 'Maristella Ida' , '489'),
('B426BF5E' , '244' , 'Allycia Ravi' , '489'),
('4900DD94' , '242' , 'Finnegan Romano' , '345');

insert into provider (`password`, p_id, `name`) 
values 
('F2B74F89' , '369' , 'Alonzo Perez'),
('B97A0B2C' , '775' , 'Hiedi Clien'),
('80A0D1E2' , '438' , 'Samantha Danielson'),
('917AAF88' , '427' , 'Terry Smith'),
('753E9606' , '874' , 'Nina Petrov'),
('DDEB7FC5' , '559' , 'Penelope Fine'),
('45E3CFCB' , '501' , 'Daniel Zhao'),
('7985AAAF' , '143' , 'Neil Das'),
('2D35C3E7' , '187' , 'Ishaan Ali'),
('5BC5961A' , '961' , 'Maia Aias');

insert into scholarship (sc_id, `name`, amount, deadline, purpose, p_id) 
values 
( '87049' , 'Williams Scholar' , 7400 , '2022-06-10' , 'Tennis Scholarship' , '8293'),
('30330' , 'Lefties Society' , 3000 , '2022-04-13' , 'Left-handed Scholarship' , '8175'),
('87011' , 'Cambridge Excellence' , 8300 , '2022-05-25' , 'Musicians Scholarship' , '6094'),
('65488' , 'Fairfield Students Assistance' , 2800 , '2022-05-12' , 'Community Service Scholarship' , '6519'),
('29359' , 'SWE Scholarship' , 4600 , '2022-03-03' , 'Womens Scholarship' , '8763'),
('88965' , 'ACLU Scholars' , 6500 , '2022-07-10' , 'LGBTQI+ Scholarship' , '9351'),
('41852' , 'California Athletic Grant' , 5300 , '2022-07-11' , 'Baseball Scholarship' , '6054'),
('54328' , 'Governors Grants' , 7500 , '2022-05-12' , 'Military Scholarship' , '8439'),
('93204' , 'Stanford Academics Grant' , 6800 , '2022-01-30' , 'Academic Achievement Scholarship' , '7820'),
('83897' , 'The Troublemaker Scholarship' , 5300 , '2022-04-03' , 'Theater Scholarship' , '5712');

insert into application (s_id,c_id,p_id, `date`, sc_id, app_id, `status`, feedback, status_date, feedback_date) 
values 
('28039','297','369' , '2022-02-17' , '93204' , '4060' , 'Open' , 'Unfortunately, we have decided to pass this opportunity onto another candidate, better luck next time!' , '2022-05-10' , '2022-05-10'),
('77501','792','775' , '2022-06-12' , '87011' , '7265' , 'Open' , NULL , '2022-03-25' , NULL),
('96444','322','438' , '2022-03-29' , '87049' , '5151' , 'Reviewing' , 'Thank you for your patience' , '2022-04-08' , '2022-05-10'),
('95398','292','427' , '2022-02-11' , '30330' , '2555' , 'Paid' , 'Thank you for your submission, you have been accepted!' , '2022-07-22' , '2022-07-15'),
('43880','325','874' , '2022-02-12' , '65488' , '9800' , 'Paid' , 'Your community service contribution of over 200 hours over the past year has gone above and beyond our expectations, you have been accepted for our scholarship.' , '2022-07-14' , '2022-07-07'),
('83466','464','559' , '2022-01-25' , '83897' , '6398' , 'Accepted' , 'In an effort to support young artists of tomorrow, we are excited to extend this scholarship to you. Congratulations!' , '2022-06-20' , '2022-06-06'),
('26202','520','501' , '2022-03-20' , '54328' , '6421' , 'Open' , NULL , '2022-02-12' , NULL),
('86955','229','143' , '2022-05-08' , '65488' , '2142' , 'Reviewing' , 'Thank you for your patience' , '2022-04-10' , '2022-04-10'),
('29027','147','187' , '2022-03-30' , '29359' , '4351' , 'Paid' , 'Congratulations! As women in tech we are excited to extend this scholarship offer to you.' , '2022-08-13' , '2022-07-30'),
('89554','868','961' , '2022-02-05' , '93204' , '8823' , 'Accepted' , 'Congratulations! Your academic excellence is a proof of your resilience regardless of obstacles. Great Job!' , '2022-05-13' , '2022-05-01');

insert into payment (pay_id, amt, col_id, s_id, c_id, app_id, p_id, pay_date) 
values 
( '7849' , 6800 , '102' , '24378' , '297' , '62790' , '369' , '2022-10-24'),
( '6691' , 3000 , '489' , '33565' , '620' , '37398' , '438' , '2022-07-22'),
( '9827' , 5300 , '423' , '92122' , '147' , '16730' , '874' , '2022-09-29'),
( '6770' , 2800 , '489' , '49617' , '620' , '24863' , '143' , '2022-07-14'),
( '8002' , 4600 , '141' , '62393' , '464' , '54750' , '961' , '2022-08-13');

insert into student_phones (s_id, phone) 
values 
('28039' , '(371)-484-2371'),
('77501' , NULL),
('96444' , '(922)-469-1348'),
('95398' , '(462)-865-9569'),
('43880' , '(987)-542-3740'),
('83466' , '(947)-648-4311'),
('26202' , NULL),
('86955' , '(321)-514-5985'),
('29027' , '(569)-404-3431'),
('89554' , '(649)-723-2699'),
('56171' , NULL),
('38193' , '(965)-445-3873'),
('34698' , '(363)-898-8027'),
('24378' , '(288)-241-6117'),
('34864' , NULL),
('66805' , '(590)-570-7364'),
('33565' , NULL),
('88078' , '(812)-268-5219'),
('49617' , '(435)-697-6387'),
('80095' , '(680)-116-2788'),
('24362' , '(268)-773-1312'),
('49709' , NULL),
('62393' , '(967)-483-7352'),
('76268' , '(395)-173-3665'),
('92122' , '(844)-980-1259'),
('61360' , NULL),
('71763' , NULL),
('35165' , '(577)-885-9281'),
('72154' , '(661)-499-8323'),
('63168' , '(526)-843-6069');

insert into college_phones (col_id, phone) 
values
( '102' , '(548)-153-9853'),
( '141' , '(905)-784-8080'),
( '423' , '(556)-850-6559'),
('489' , '(916)-292-2110'),
( '345' , '(861)-321-4142');

insert into attends (e_id, s_id) 
values 
('9074' , '24378'),
('9074' , '34864'),
('9074' , '66805'),
('9074' , '33565'),
('9074' , '92122'),
('7714' , '95398'),
('7714' , '86955'),
('7714' , '34698'),
('3270' , '49617'),
('5602' , '62393'),
('8446' , '28039'),
('8446' , '77501');

insert into organizes (e_id, s_id) 
values 
( '9074' , '80095'),
('8211' , '24362'),
('1501' , '49709'),
('7628' , '62393'),
('1516' , '76268'),
('4770' , '92122'),
('8353' , '61360'),
('7714' , '71763'),
('8617' , '35165'),
('7208' , '72154'),
('8233' , '63168'),
('1411' , '33565'),
('3270' , '88078'),
('5602' , '49617'),
('8446' , '66805');

insert into notification (n_id, content) 
values 
('251' , 'Congratulations! youve been selected for scholarship X. Please check your account for more information.'),
('849' , 'Please check your account for updates regarding scholarship application X' ),
('301' , 'Please check your account for updates regarding scholarship application X' ),
('914' , 'Congratulations! youve been selected for scholarship X. Please check your account for more information.'),
('548' , 'Please check your account for updates regarding scholarship application X' ),
('932' , 'Congratulations! youve been selected for scholarship X. Please check your account for more information.' ),
('983' , 'Please check your account for updates regarding scholarship application X'),
('123' , 'Congratulations! youve been selected for scholarship X. Please check your account for more information.'),
('124' , 'Congratulations! youve been selected for scholarship X. Please check your account for more information.'),
('435' , 'Please check your account for updates regarding scholarship application X' );

insert into CLO_phones (c_id, phone) 
values 
('297' , '(504)-559-3073'),
('792' , '(582)-168-5253'),
('322' , '(632)-623-9467'),
('292' , '(458)-974-8756'),
('325' , '(481)-180-7297'),
('464' , '(895)-737-8736'),
('520' , '(804)-121-5605'),
('229' , '(556)-998-8903'),
('147' , '(734)-509-6621'),
('868' , '(191)-484-8398'),
('620' , '(496)-298-9064'),
('348' , '(925)-669-7611'),
('244' , '(733)-594-7410'),
('242' , '(164)-451-9908');

insert into view_profile (p_id, prof_id) 
values 
('369' , '74467366'),
('427' , '21050636'),
('874' , '80372482'),
('501' , '38494913'),
('961' , '84588260'),
('775' , '43397332'),
('438' , '55811044'),
('427' , '24981213'),
('874' , '38841999'),
('143' , '62515561'),
('187' , '63505384'),
('961' , '97583502'),
('369' , '68535158'),
('438' , '38653648'),
('427' , '58548248'),
('501' , '11492193'),
('143' , '48973179');

insert into provider_phone (p_id, phone) 
values 
( '369' , '(907)-769-9372'),
('775' , '(962)-384-5052'),
('438' , '(583)-876-5788'),
('427' , '(254)-433-9446'),
('874' , '(337)-446-8263'),
('559' , '(708)-804-3342'),
('501' , '(502)-411-9513'),
('143' , '(633)-607-1836'),
('187' , '(216)-329-6851'),
('961' , '(675)-320-8427');

insert into view_scholarship (sc_id, s_id) 
values 
 ( '93204' , '24378'),
 ( '87011' , '34864'),
 ( '87049' , '77501'),
 ( '30330' , '33565'),
 ( '65488' , '95398'),
 ( '83897' , '92122'),
 ( '54328' , '34698'),
 ( '65488' , '49617'),
 ( '29359' , '62393'),
 ( '93204' , '28039');
 
insert into view_notification (s_id, n_id) 
values 
( '24378' , '251'),
('34864' , '849'),
('77501' , '301'),
('33565' , '914'),
('95398' , '548'),
('92122' , '932'),
('34698' , '983'),
('49617' , '123'),
('62393' , '124'),
('28039' , '435');
