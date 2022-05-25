# rota

I decided to steer clear of using databases to store the data as there wasn't enough persistent data necessary to warrant that. I opted to store on the server json files that hold the rota data. This is available as JSON through a GET request. 

To populate the rota automatically, this express api runs a cron job that builds a randomised rota for employees once every two weeks. Every second Sunday it rebuilds the rota and stores it in the json folder. 

To watch it do this process you can adapt the code in the rotaCreation file - ***src/jobs/rotaCreation.ts*** - changing the cron time to what is currently commented out above. This will run the code every 2nd second. As you will see, the code also runs only if isUpdateWeek is set to true. This acts as a boolean counter, blocking access to an actual update unless it is the correct week to do so. 

#To start

*- make sure you're terminal is in the right path - you should be inside rota-api to run these commands.*

Run an npm install - ```npm i```

Run nodemon - ```nodemon```

*- If you don't have nodemon installed globally, this may or may not work. In the case of it not working please run the command below.*

Optional command (if nodemon did not work) - ```npm run build:development && npm run start```