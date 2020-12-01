# README

The purpose of this TaskManager project is for the user to be able to interact with a list of tasks in a web browser. The user will be able to create/save, read, update, and delete tasks. Goals will be for the user to log in to see their personal tasks, to catagorize their tasks, and to have access to the completed todos. 

TaskManager project steps
//1. Create new MVC project
2. Create controllers & views
    1. TaskManagerController
3. Routing steps
4. Create model(s)
    1. Users: Id, Username, DisplayName, Password
    2. Boards: Id, BoardName, UserId (fk), 
    3. Stickies: Id, StickyText, BoardId (fk)
5. Migrate model(s)
6. Create the actions(functions) for each CRUD function/view
    1. IndexBoard - list all boards
    1a. IndexStickies - list all stickies in a board
    2. Create - board from IndexBoard
        *Jay's board - Backlog/Todo/Doing/Done for coding
    2a. Create - sticky from IndexStickies 
    3. Save - new board
    3a. Save - new sticky
    4. Update/Edit - board
    4a. Update/Edit - sticky
    5. Delete - board
    5a. Delete - sticky
    6. Login page? - view only your board & stickies
    7. View the Done Board on a separate Index?
7. Fix/Add links for navigation
8. CSS fun! - make it look like a bulletin board 
9. Be able to move around stickies & have it remember where they are
10. Complete todos (move to the Done List)
11. Organize stickies by color? 

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
