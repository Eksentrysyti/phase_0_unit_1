## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Adds specified files to the staging area (readies files to be commited)

#### branch
Creates a separate copy or "branch" of a repository.  Useful for experimenting on code or working out bugs

#### checkout
Allows switching between branches

#### clone
Copies a repository for editing

#### commit
Sends changes from the staging area to the repository

#### fetch
Gets new changes from the original remote repository

#### log
Shows a log of the recent commit change messages

#### merge
Combines changes from a branch to the master branch

#### pull
Grabs changes from a remote repository and merges it into a local repository

#### push
Adds local repository changes to a created branch of the remote repository

#### reset
Resets the staging area to the state of the last commit

#### rm
Removes files from staging area

#### status
Shows the status of files in the working directory and staging area


## Release 4: Git Workflow

*Assuming remote repo already exists*
1) 

- Push files to a remote repository
- Fetch changes
- Commit locally
git push [alias of remote repo] [target branch]
git fetch [alias of remote repo]
git commit -m "<commit message here>"

## Release 5: Reflection
The strategy in learning how to use the command line for git is simply practice.  Reading about the commands didn't help much in learning how to use the comamnd line, but after a few times moving files around, I got the hang of using the commands.  gitref.org was a great help as a resource as it listed all the git commands and made it easy to look up how to use each command.  It also gave examples on how to use each command and any extra properties a command might have.