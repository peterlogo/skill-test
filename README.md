## Overview
This branch contains a fix for the user authentication flow. The user was unable to signup or login to the application. 

### Video Showing the fix:
[Authentication Fix Video](https://www.loom.com/share/1d9f68d1afb94f87b726b7bd0e4a5290?sid=544ea075-3c5d-4128-b189-1e4a5db107dd)

### Project setup
1. Ensure you are using NodeJS version 16. If you have a newer version, you can use node version manager (nvm) which you can install to get v16 and run the project.
2. Run `npm install` on the root directory and in the backend folder.
3. Run a MySQL database locally, preferably using Docker. I used docker to run the database for this implementation. Here is an example of the command to get your mysql environment running.
 `docker run --name your_container-name -e MYSQL_ROOT_PASSWORD=your_password MYSQL_DATABASE=your_database -d mysql:8.0.35-debian`
To get your database ready you need to load the sql script file from the db folder in the backend folder.
Since you have the mysql running on Docker, you can run this command to load and get your database tables ready. ` docker exec -i your_db_container_name mysql -uroot -pyour_password your_database < /path/to/your/script.sql`
4. You can proceed to update the .env file on the backend folder with your database credentials along with your email service credentials.
5. Run `npm run dev` from the root directory to start the application. This will start both the client and backend server.

### Recommendations
1. I noticed that the .env files were being added to the git history, which is insecure and can compromise the project as the secrets would be exposed. Since theirs a .gitignore file, we should add the .env file there so that we do not have it exposed to our git history. If for any reason it's being tracked by git before ignoring the file we can run this command to remove it from the cache. `git rm --cached .env` then you proceed to commit the changes using `git commit -m "Removed .env from tracking"`. 
2. I would recommend using a `.env.example` file to show the structure of the environment variables and developers can use it to create their own `.env` file locally which won't be added to the git history.
3. We should also ensure that we are not committing console.logs statements as well. In a production environment, it could be an issue as it would consume more memory, and it could also be a security risk as it could expose sensitive information as well.
   
 
 
