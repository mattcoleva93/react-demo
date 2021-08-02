#Project setup
You will have to do three things in order to run the project.

## Set up GraphQL
1. Log into GitHub
2. Go to Settings > Developer Settings > Personal access tokens
3. Click 'generate new token' and you will be prompted to select scopes. Choose the following:
    Under 'repo', select all
    Under 'admin:org', select 'read'
    Under 'admin:repo_hook', select 'read'
    Under 'user', select all
    Under 'admin:gpg_key'
4. Copy the token and then go into /frontend/graphql/githuboptions.tsx and paste into the authorization header, add the word 'bearer' at the beginning. It should look something like this:
    Authorization: "bearer ghp_SXJc6VXqyJtDv7fKidApBBP4FPpK2"
5. In that same file, add your github username

## Run the backend
1. Open a terminal and navigate into the /backend folder
2. run npm start

## Run the fronted
1. Open another terminal and navigate into the /frontend folder
2. run npm start