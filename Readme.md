===============================
***** Customer Lising App *****
==================================================
First install mysql server
==================================================
Ubuntu: 
    *sudo apt get update
    *apt get install mysql-server

==================================================
Backend : Rest api using [Node, mySql, Sequelize]
==================================================
cd Server
    *npm install
    *node server.js

* used MySql for database
* ORM - sequelize

==================================================
Frontend: React, Redux, Thunk[Middleware]
==================================================
cd Client
    *npm install
    *pm run dev-server

* used sass for styling
* webpack for building
* redux-thunk as middleware

============================================================================================
Requirements:
=============
* UI – The landing page should have two container with following behaviour:
        - Container 1
            - List of customers with each row showing customer basic details - Employee Id, Name, Age, Sex
        - Container 2
            - On clicking of customer row in container 1, list of customer’s address should be listed (customer may have 0 or more addresses assigned to him)
 
* API (Optional) – Use mock APIs if not familiar with API development
        - endpoint to fetch customer info, given customer id
        - endpoint to fetch all customer addresses given customer id
 
* Database (Optional) [Not required if using mock APIs]
        - Store customer and address data in a database. Prepopulate customers data in the database with seed data.
=============================================================================================
Additional Functionalities added:
=================================
* Add new customer
* Remove customer
