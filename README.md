# Ryan-Password-Generator


This application takes in data inputted via prompt and confirm commands and then creates and displays a randomly generated password on screen. 

1. Generate password button is linked to script.js and stored as the variable generateBtn. 

![password-generator1](https://user-images.githubusercontent.com/74829094/110243049-c37a7780-7f26-11eb-9cbf-6db87c5e6224.png)

2. Eventlistener is added so that when the button is clicked it will run the writePassword function which starts by using prompts and confirms to establish a password length as well as which character types to include.

![password-generator2](https://user-images.githubusercontent.com/74829094/110243148-29ff9580-7f27-11eb-8810-9f9a49c69e65.png)

![password-generator3](https://user-images.githubusercontent.com/74829094/110243156-31bf3a00-7f27-11eb-8fc1-d903ae999b50.png)

3. Once inputs have been checked to make sure they meet requirements (a password length between 8 and 128 characters, and at least one character type) they are then passed to the password generator. 

4. The password generator works using a for loop and if else statements. First we create a variable called r which is a random number between 0 and 3 inclusive. Each of these numbers are matched with a character type such that when both are true another character of that type is added to the password string.

5. When a character type is deselected it means it is not true so that anytime r is equal to the corresponding number a character will not be generated but rather we will iterate down and try again. This method requires trial and error to create the password but it does use minimal code. Credit for the idea goes to Vincent Lab on youtube. https://youtu.be/PtnYuiIyqeM?t=118 

6. Once the password is complete it is displayed in the password textarea.

![password-generator4](https://user-images.githubusercontent.com/74829094/110243576-fde51400-7f28-11eb-9f9c-6ef741bb29f4.png)

7. The functions used to generate the characters use .formCHarCode and a random number to generate upper and lower case letters. Credit goes to Traversy Media https://youtu.be/duNmhKgtcsI?t=289
