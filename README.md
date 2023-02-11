# Environment setup
## Create repository
1. Create a github account
2. Create a public repository without any readme or any other files.
3. Name the repository "movie_rating"

## Install git
1. Install git in your computer. To install, go to https://github.com/git-guides/install-git
2. Run `git --version` to see that output is coming showing the version of git.

temp
## Clone repository
Copy the HTTPS path of your created repository from the github account and then clone using `git clone` command. For example, my repository link is: `https://github.com/abhishekkumawat23/movie_rating.git`, so I am using following commands:
```
cd Desktop
git clone https://github.com/abhishekkumawat23/movie_rating.git
cd movie_rating
```
For your case, the repository link will be different. Find the HTTPS path in the `Code` section to get the link.

Note: `cd` in above commands means change directory.

## Install VS code and open project
1. Install VS code.
2. Open the `movie_rating` project in VS code.

## First commit
1. Create a file called `README.md`.
2. Write any text like `Hello World!` in it.
3. Open terminal from VS code (`Ctrl+Shft+P`). Do everything from now on in VS code terminal and not in external terminal. VS code terminal allows easy way to log into Github account.
4. Add the changes to git using
`git add -A`
5. Commit the changes and write a message explaining the commit:
`git commit -m "My first commit"`
6. Push the git changes. This command ask for authentication first time by opening github login in browser.
`git push`

## Install NodeJs and NPM
1. Install NodeJs from https://nodejs.org/en/. This installation will install both NodeJs and npm.
2. From the integrated terminal of VS code, run `npm --version` to confirm that command is installed properly.

# NPM initialization
Run commands from the integrated terminal of the VS code.

## Client
We will install the basic skeleton of React app by running a command provided by react.
1. Ensure that your VScode terminal is in the root folder of the project. If not use `cd` command.
2. Run `npx create-react-app client` command. This command will create a `client` folder and add lot of files in it. Confirm that `.gitignore` file and `node_modules` folder is present in created `client` folder.
3. `cd client`
4. Run `npm start` and it will start the react project in a browser at 3000 port. If the browser doesn't open automatically, then go to `http://localhost:3000/` link and confirm that the page shows react logo icon.
5. Stop the server by pressing `Ctrl+C` in the terminal.
6. Add the changes to git using
`git add -A`
7. Commit the changes and write a message explaining the commit:
`git commit -m "React skeleton"`
8. Push the git changes.
`git push`

## Server
We will install the basic skeleton of Express app by running a command provided by express.
1. Ensure that your VScode terminal is in the root folder of the project. If not use `cd` command. For example, if you are in `client` folder, then run `cd ..` to go to the root folder. Note: `..` means go back to the parent folder of the existing folder.
2. Run `npx express-generator server` command. This command will create a `server` folder and add lot of files in it.
3. `cd server`
4. If `.gitignore` command is not present in `server` folder, copy the `.gitignore` file from `client` folder to `server` folder because the express command didn't create it automatically.
5. If `node_modules` folder is not present in `server` folder, run `npm install` and it will install all dependencies mentioned in `package.json`.
6. Run `npm start` to start the server. This command will not automatically open the browser, so after running the command, go to browser and run `http://localhost:3000/` and confirm that express content is shown in it.
7. Stop the server by `Ctrl+C`
8. We saw that both client and server started at same 3000 port. We don't want that because we want to start them in parallel. So, go to `bin/www` and change the line `var port = normalizePort(process.env.PORT || '3000');` to `var port = normalizePort(process.env.PORT || '9000');`. This will allow the server to start at 9000 port.
9. Run `npm start` again and confirm that server is running at `http://localhost:9000/`.
10. Add the changes to git using
`git add -A`
11. Commit the changes and write a message explaining the commit:
`git commit -m "Express skeleton"`
12. Push the git changes:
`git push`
