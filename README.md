# Environment setup
## Create repository
1. Create a github account
2. Create a public repository without any readme or any other files.
3. Name the repository "movie_rating"

## Install git
1. Install git in your computer.
2. Run `git --version` to see that output is coming showing the version of git.

## Clone repository
Copy the HTTPS path of the created repository from the github account and then clone using `git clone` command.
```
cd Desktop
git clone https://github.com/abhishekkumawat23/movie_rating.git
cd movie_rating
```

## Install VS code and open project
1. Install VS code.
2. Open the `movie_rating` project in VS code.

## First commit
1. Create a file called `README.md`.
2. Write any text like `Hello World!` in it.
3. Open terminal from VS code (`Ctrl+Shft+P`). Do everything from now on in VS code terminal and not in external terminal. VS code terminal allows easy way to log into Github account.
4. Add the changes to git using
`git add .`
5. Commit the changes and write a message explaining the commit:
`git commit -m "My first commit"`
6. Push the git changes. This command ask for authentication first time by opening github login in browser.
`git push`

## Install NodeJs and NPM
1. Install NodeJs from https://nodejs.org/en/. This installation will install both NodeJs and npm.
2. From the integrated terminal of VS code, run `npm --version` to confirm that command is installed properly.

# NPM initialization
Run commands from the integrated terminal of the VS code.

## Add gitignore file
Add the gitignore file to avoid commiting and pushing node modules to the remote github
1. Create file called `.gitignore` in the root folder of the project.
2. Add `node_modules` as file content.
3. `git add .` to add the changes to git
4. `git commit -m "Adding gitignore file"`
5. `git push`

## Client
1. Create directory named `client` in the root folder of project.
2. `cd client`
3. Run `npm init` to create a `package.json` file.
4. Run `npm install react` to add `react` dep in the project.

## Server
1. Create directory named `server` in the root folder of project.
2. `cd server`
3. Run `npm init` to create a `package.json` file.
4. Run `npm install express` to add `express` dep in the project.
