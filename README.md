<h1 align="center">welcome to Birthday Remider Bot 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained-yes-blue.svg" />
  <a href="https://github.com/alok722/express-server-boilerplate-auth.git/blob/main/LICENSE" target="_blank">
    <img alt="Licence" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
</p>

> an express server bot which will remind me to wish Birthday to my friends.

## ❓ But How?

> It runs a cron job daily at 11pm and fetch all the records from MongoDB and check if someone's birthday is tomorrow, if **Yes** it will trigger an email to me reminding me about the Birthday.

## ❔ How can you make this bot work for you?

Follow below steps to make this bot yours.
```sh
Step 1 : Fork this Repository.
Step 2 : Clone the forked repository to your local
Step 3 : Create a .env file in the root and add these keys & value. *
         EMAIL:BOT_EMAIL**
         PASSWORD:BOT_EMAIL_PASSWORD**
         MONGODB_CONNECTION_URL:YOUR_DB_URL
Step 4: Go this path (src\services\notification.service.js) and update line no. 15 & 17
Step 5: Commit and push your changes to github, then host your server.
Step 6: You can add data to MongoDB from postman by running a local instance of this server connected to cloud database. The request url is POST `localhost:3030\api\add` and request body would be, { "name" : "Your Friend Name", "dob" : "2/7"}. Over here the DOB is 2nd July.

* Use Github Secret to set your .env content
** To configure your gmail to send out email on behalf of Bot, please follow this link. https://edigleyssonsilva.medium.com/how-to-send-emails-securely-using-gmail-and-nodejs-eef757525324
```


happy wishing 😊

## 👤 author

 **Alok raj (alokr417@gmail.com)**

* website: https://alokraj.tech/
* github: [@alok722](https://github.com/alok722)
* linkedin: [@alok722](https://linkedin.com/in/alok722)

## 🚀 future scope

* making it more generic and easy to use

## 🤝 contributing

contributions, issues and feature requests are welcome!<br />feel free to check issues page.

## 🙌 show your support

give a ⭐️ if this project helped you!


***