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
