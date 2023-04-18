-- SJSU CMPE 138 Spring 2022 TEAM2
drop database IF exists  ScollegeApp;
create database ScollegeApp;
use ScollegeApp;

create table college
(col_id int(9) not null,
`name` varchar(30) not null,
primary key (col_id));

create table student
(s_id	int	not null AUTO_INCREMENT,
first_name	varchar(20)	not null,
last_name varchar(20)	not null,
email	varchar(30) not null,
age int,
dob date,
col_id int(9) not null,
is_ambassdor boolean DEFAULT false,
`password` varchar(200) not null,
primary key (s_id),
foreign key (col_id) references college(col_id));

create table `profile`
(prof_id int not null AUTO_INCREMENT,
s_id int not null,
highest_qualification varchar(15) not null,
family_annual_income float not null,
GPA float(4) not null,
is_clo_verified tinyint,
primary key(prof_id),
foreign key (s_id) references student(s_id));

create table `events`
(e_id int not null AUTO_INCREMENT,
`time` time not null,
`date` date not null,
location varchar(150) not null,
purpose varchar(50),
primary key(e_id)
);

create table notification
(n_id int(9) not null,
content varchar(500) not null,
primary key (n_id));

create table clo
(`name` varchar(20) not null,
c_id int(9) not null AUTO_INCREMENT,
`password` varchar(200) not null,
col_id int(9) not null,
primary key (c_id),
foreign key (col_id) references college(col_id));

create table provider
(p_id int(9) not null AUTO_INCREMENT,
`name` varchar(20) not null,
`password` varchar(200) not null,
 primary key (p_id));

create table scholarship
(sc_id int(9) not null AUTO_INCREMENT,
`name` varchar(200) not null,
amount  bigint not null,
deadline date not null,
purpose varchar(50) not null,
p_id int(9) not null,
primary key (sc_id),
foreign key (p_id) references provider(p_id));

create table application
(p_id int(9) not null,
`date` date not null,
sc_id int(9) not null,
app_id int not null AUTO_INCREMENT,
`status` varchar(20) not null,
feedback varchar(250),
status_date date,
feedback_date date,
s_id int not null,
c_id int(9) not null,
primary key (app_id),
foreign key (p_id) references provider(p_id),
foreign key (sc_id) references scholarship(sc_id),
foreign key (s_id) references student(s_id),
foreign key (c_id) references clo(c_id));

create table payment
(pay_id int(9) not null AUTO_INCREMENT,
amt bigint not null,
col_id int(9) not null,
s_id int not null,
c_id int(9) not null,
app_id int not null,
p_id int(9) not null,
pay_date date not null,
primary key(pay_id),
foreign key (col_id) references college(col_id),
foreign key (s_id) references student(s_id),
foreign key (c_id) references clo(c_id),
foreign key (app_id) references application(app_id),
foreign key (p_id) references provider(p_id));

create table student_phones
(s_id int not null,
phone varchar(20),
foreign key (s_id) references student(s_id));

create table college_phones
(col_id int(9) not null,
phone varchar(20) not null,
foreign key(col_id) references college(col_id));

create table attends
(e_id int(9) not null,
s_id int not null,
foreign key(e_id) references `events`(e_id),
foreign key(s_id) references student(s_id));

create table organizes
(e_id int(9) not null,
s_id int not null,
foreign key(e_id) references `events`(e_id),
foreign key(s_id) references student(s_id));

create table notify
(n_id int(9) not null,
e_id int(9) not null,
s_id int not null,
foreign key (n_id) references notification(n_id),
foreign key (e_id) references `events`(e_id),
foreign key (s_id) references student(s_id));

create table clo_phones
(c_id int(9) not null,
phone varchar(20) not null,
foreign key (c_id) references clo(c_id));

create table view_profile
(p_id int(9) not null,
prof_id int not null,
foreign key (p_id) references provider(p_id),
foreign key (prof_id) references `profile`(prof_id));

create table provider_phone
(p_id int(9) not null,
phone varchar(20) not null,
foreign key (p_id) references provider(p_id));

create table view_scholarship
(sc_id int(9) not null,
s_id int not null,
foreign key (sc_id) references scholarship(sc_id),
foreign key (s_id) references student(s_id));

create table view_notification
(s_id int not null,
n_id int(9) not null,
foreign key(s_id) references student(s_id),
foreign key(n_id) references notification(n_id));
