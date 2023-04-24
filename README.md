# SimpleCRUD
A simple CRUD application for my CS module assignment. I used: React,Node.js,Express,MySQLWorkbech.
Please click the youtube link provided for an app demo video: 
https://www.youtube.com/watch?v=xtgjMawhWQg

## Getting Started

To clone the repository and set up the project locally, follow these steps:

Make sure you have Node.js and npm installed on your local machine. You can download Node.js from the official website: https://nodejs.org/en/download/

Create a new folder for your project and navigate to it using the command line or terminal.

Run git init to initialize a new Git repository.

Clone the repository by running the following command (replace your-repo-url with the actual URL of your remote repository):
git clone your-repo-url

Change the directory to the cloned repository:
cd your-repo-folder

Install the required packages by running:
npm install

Import the provided SQL dump into your local MySQL database. You'll need to have MySQL installed on your local machine. To import the SQL dump, open a terminal/command prompt and run the following command (replace the placeholders with your actual values):
mysql -u your_mysql_username -p your_database_name < path/to/your/USERS_users.sql
You will be prompted to enter your MySQL password.

Update the database connection details in your backend file (e.g., server.js or index.js) to match your local MySQL configuration:
const db = mysql.createConnection({
  user: 'your_mysql_username',
  host: 'localhost',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

Start the backend server by running:
node server.js

In a new terminal window, navigate to the frontend folder (e.g., cd your-repo-folder/frontend), and install the required packages by running:
npm install

Start the frontend development server by running:
npm start

Now, you should be able to access the application in your web browser at http://localhost:3000.

## Application Features
Here's a quick list of features present in your code:

1. **Form to add new users**: A form that allows you to input user details such as title, first name, last name, mobile, email, address, etc. When the "Add User" button is clicked, it validates the input, sends an API request to the backend to create a new user, and updates the user list on the frontend.

2. **Show and hide form and database**: Functionality to show and hide the user input form and database by toggling state variables.

3. **Displaying user database**: Retrieves the user list from the backend and displays it in a table. Users can click on the "Show Database" button to fetch and display the user database.

4. **Search functionality**: Users can search for other users in the list by typing a query in the search bar. The search function filters the user list based on the search query.

5. **Editing user data**: The user data in the table can be edited inline. When the edit button is clicked, the table cells become editable. After making changes, users can save the updated data by clicking the edit button again, which sends an API request to the backend to update the user information.

6. **Deleting users**: Users can be deleted from the list by clicking the delete button, which sends an API request to the backend to delete the user record. The frontend user list is then updated accordingly.

7. **Updating users**: User information can be updated, which sends an API request to the backend to update the user record.

8. **Error handling and input validation**: The code includes error handling and input validation to ensure that only valid data is submitted and properly processed.
