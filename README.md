# react-express-template
Used to create and scaffold a backend node api, with quick integration with the frontend.

Clone the repo for a new project
npm install
Lots of thing sare subject to change, and the db calls for the scaffold are not complete / are a bit sloppy on output.


*required
basic .env file is in:
/SetupDocumentation/env.txt

create a .env file and cp / change the config.


Its a work in progress, needs better api error handling, but..
Everything is dynamically imported and assigned to a variable by filename.
ex: 
  Users model:
    to access the db in a route/controller it would be db.Users

Controllers export the specific controller from ./Server/Controllers

  so to require would be :
    const {Users} = require(/Server/Controllers)
    
 - Scaffold:

  npm run createApi -- Name 
    Name should be uppercase to hold the structure.

  creates Empty model
  
  creates routes, controllers, tests, and api for

  ex: Users.getOne(id);
    getOne
    getAll
    post/create
    put/update
    delete/destroy
--------------------
   Users.getOneWithInfo(id)
   Users.getAllWithInfo(data)
    
    getOne With associations - depth -1
    getAll With associations - depth -1
    post With associations - depth -1
  
  Users.getWithAllAssociations()
  Users.getOneWithAllAssociations(id)
  
  
  model.associations - depth -all
  


  Excluding args will create a model, view, controller, tests, and api calls for the backend tests, as well as frontend api.

  Including args will create whatever is in the arguement list.
  Args: 
        -controller
        -model
        -tests 
        -routes
        -api 
        -seed


  There is a config file in
    ./Scaffold/Config/Config.js
      Everytime you create a new api endpoint with models etc, it gets added to here and saved.
      you can set up associations within this file to have the associations automatically set up.
  
    to refresh the mvc with model associations run
    npm createApi -- -load

    without it you won't have all the api call associations.

   ./Scaffold/Config/FileConfig

   This is where everything is setup for output
   The ONLY recomennded output you should change is where apiType === "frontend"
   This will output the api functions for the frontend, assuming you got rid of the frontend and are using your own dir.

   example:
    Project:
      backend:
        server.js
      frontend:
        src: ...


     you could set apiFrontend.dir.output === "../frontend/src"
     and the scaffold will add and remove the apis from there.

   ---------------------------------------------------------

   RemoveApi

  npm run removeApi -- Name
  excluding args will remove the entire endpoint with models, etc.
  This will also remove it from /Scaffold/Config/Config.js
    *when using npm run createApi -- -load it will no longer create this endpoint

  Including args will remove whatever is in the arguement list.
  Args: 
        -controller
        -model
        -tests 
        -routes
        -api 
        -seed


  if you want to remove EVERYTHING and start from scratch
  Careful with this one.
    npm run removeApi -- -r
    *YOU WILL REMOVE ALL OF FUNCTIONALITY OF THE CONTROLLERS AND ROUTES YOU ADDED. It just maintains the model structure.
    so..
    if you ran this by accident, it doesn't remove your config file, so you can get the model structure and endpoint structure back.






 
  
  
  
 
