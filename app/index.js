const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req, res) => 
res.send(`appid: ${appid} home page: says hello!`));

app.get("/app1", (req, res) => 
res.send(`appid: ${appid} app1 page: says hello!`));

app.get("/app2", (req, res) => 
res.send(`appid: ${appid} app2 apge: says hello!`));

app.get("/admin", (req, res) => 
res.send(`appid: ${appid} ADMIN page: very few people know about this one`));

app.listen(appid, () => console.log(`${appid} is listening.`));