const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
    static: "./build"
})

const PORT = process.env.PORT || 3003;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/https://skillsafari-task2.herokuapp.com/users/*" : "/$1",
    })
);
server.use(router);
server.use(cors());
server.listen( PORT, () => {
    console.log(`server is running on:  ${PORT}`)
});