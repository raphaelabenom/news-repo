(Be sure to back up your Git repository folder first!)

1. find .git/objects/ -type f -empty | xargs rm
2. git fetch -p
3. git fsck --full


This will first remove any empty object files that cause corruption of the repository as a whole, and then fetch down the missing objects (as well as latest changes) from the remote repository, and then do a full object store check. Which, at this point, should succeed without any errors (there may be still some warnings though!)