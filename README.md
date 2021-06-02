# Ninstagram Clone: Nomad Coffee Backend

> An app where developers can go and find the best caffes to work from in 한국!!

## Bonus Todo ⌛️

```
⌛️ Add uploading photo at `createAccount`
⌛️ Create `editCoffeeShopPhoto` to edit each photo of CoffeeShop
```

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

## Day4-User Profile(2d)

### Now it's time to create the following resolvers:

```
✅ login: Log the user in by returning a JWT or return an error in case the password is wrong.
✅ seeProfile: See any users profile.
✅ editProfile: Change the user's profile, this includes changing password and changing the avatarURL.
```

## Day8-Follow Me!(1d)

```
✅ Implement Follow / Unfollow functionality.
✅ Implement followers & following computed fields with pagination on the seeUser resolver (No extra resolvers).
✅ Implement searchUsers resolver.
🎁 Bonus: Pagination is Implemented at `searchUsers` resolver as well.
```

## Day9-커피숍!(2d)

### Task One: Models

```
✅ Create a Category model with a relationshops to CoffeeShop
✅ Create a CoffeeShop model with a relationship to the User that created the CoffeeShop and relationships to Category
✅ Create a CoffeeShopPhoto model with a relationship to the CoffeeShop
```

### Task Two: Resolvers

#### `createCoffeeShop`, `seeCoffeeShops`, `seeCoffeeShop`, `seeCategory`, `seeCategories`, `editCoffeeShop`

```
✅ createCoffeeShop should create a CoffeeShop, it should create a Category if it does not exist (the same way we created Hashtags on #6.4 and should upload and create a CoffeeShopPhoto for each uploaded file.
✅ seeCoffeeShops should list all the CoffeeShop with pagination.
✅ seeCoffeeShop should get a CoffeeShop by id.
✅ seeCategory should list all the CoffeeShop inside of a Category with pagination.
✅ seeCategories should list all the Category and should have a totalShops computed field that counts all the CoffeeShop inside of the Category, it should also have pagination
✅ editCoffeeShop should edit a CoffeeShop
```
