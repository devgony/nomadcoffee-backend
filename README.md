# Ninstagram Clone: Nomad Coffee Backend

> An app where developers can go and find the best caffes to work from in 한국!!

## Day1-Set Up(2d)

### On this two day assignment we will set up our project.

```
✅ Create a Github Repository named 'nomadcoffee-backend'.
✅ Set up a Prisma project.
✅ The project should follow the architecture outlined on the video (.typeDefs.js , .resolvers.js).
✅ Use babel, nodemon and dotenv
```

## Day3-User Model(1d)

### On your schema.prisma let's create the User model, the model must have the following fields:

```
✅ id
✅ username
✅ email
✅ name
✅ location
✅ password
✅ avatarURL
✅ githubUsername
```

### After you are done, make a createAccount resolver. createAccount should:

```
✅ Create a user
✅ Hash the password
✅ Check that the username / email aren't taken
✅ Return ok:true or ok:false, error:$error if there is an error.
```

## Day4-User Profile

### Now it's time to create the following resolvers:

```
✅ login: Log the user in by returning a JWT or return an error in case the password is wrong.
✅ seeProfile: See any users profile.
✅ editProfile: Change the user's profile, this includes changing password and changing the avatarURL.
```
