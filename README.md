# test-cases


Node: v18.14.0 Npm: v9.2.4

#How to setup project

clone the project by using command git clone PROJECT_URL

OR

You can download the zip

Next, you need to open project in Vs code or any other ide, then hit "npm install" into the root directory of the project

You will see node_modules folder addeed to your repository

Now, to run the test cases


This command will run all your test cases into the api-test folder

npx mocha --recursive api-tests/*.js --timeout 10000 --reporter mochawesome




#Enjoy
JAI SHREE RAM