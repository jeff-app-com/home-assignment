# Home Assignment for [Jeff App](https://jeff-app.com)

## Description

You are developing chat flows, which may be plugged into different places in our product.

Your goal is to have some sort of chat engine, which will boost up your speed of adding new dialogs in the application.

There are few example dialogs given below:

### Example #1

```
🤖: Hi there, I'm Jeff 👋
🤖: Your new best friend for finding great loan offers!
🤖: First things first - let's get your account set up 🛠️
🤖: What is your first name?
👧: <input-field>
🤖: And what is your last name?
👧: <input-field>
🤖: Nice to meet you, {firstName} {lastName}!
```

### Example #2

```
🤖: ${firstName}, what's your email address?
👧: <input-field>
🤖: Fantastic. We are 70% done with the setup!
🤖: Your age is another important value for finding the best offers. Please enter your date of birth 📅
👧: <input-field>
```

### Example #3

```
🤖: And what do you need the money for?
👧: <single-choice-input=['Home','Car','Holidays','Big Event']>
🤖: Nice, I already have some options for you
```

## Requirements

- Code must written in any JVM language
- Components must be reusable
- You must trust your code, thus it must be covered with tests.

## Submission

Send us an invite to a **private** github repository.