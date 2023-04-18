Pages:
Student:

Seeker:
1. Login and SignUp Page  
2. Profile Page
3. Edit Profile Page
3. Scholarships List Page --> Apply Button + Scholarship Details Page with Apply Button
4. Submitted Application List 
5. Application Details Page -> info, Feedback, status, pcr
6. Notification List

Ambassdor:
1. Login
2. Event list  Send Notification Button
3. Create Event (Not needed)

SignUp Page Fields:
Details To Fetch:
 name, email, phone,type, college

SignIn:
email, pwd

CLO:
1. Login
2. List of Signed up students  -> verify button 
3. Verified Students list 
4. Student Details Page -> Profile, Submitted Applications (Knowns status)
Doubt: Verify payemnet

Provider:
1. Login
2. Create Scholorship 
3. View Scholarship Pge  --> Table
4. View Applications -> List  -> 
5. Applicaton Details Page --> vie more,modify status, payment,feedback





APIs:

1. /scholarship
    1. /create POST   access: producer
    2. /all    GET    access: producer


2. /application
     1. /all    GET    access: producer
     2. /:id  GET  access: producer
     3. /:id/status  POST access: producer
     4. /:id/pay  
     5. /:id/feedback POST access: producer

3. /student
     1. /:collegeId/all    GET    access:
     2. /:collegeId/all/signed-up  GET  access:
     3. /:collegeId/all/verified  GET access:
     4. /:studentId/profile   GET access:
     5. /applications   GET access:
     6. /profile PUT access: student    Editing profile

4. /events
     1. /all    GET   access:
     2. /create POST  access:
     3. /notify GET   access:
     4. /notify/:studentID  access:

5. /notifications
     1. /all GET  access:
     

6. /login post access:


7. /signup post access:




References:
https://hevodata.com/learn/nodejs-mysql-integration/