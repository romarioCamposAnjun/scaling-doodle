const express = require("express");
const server = express();
const port = process.env.PORT_ADMIN || 3001;

server.listen(port, () => {
	console.log(`Aplicação Admin pronta para uso na porta: ${port}`);
});

server.get("/", (req, res, next) => {
	res.send(`Aplicação Admin em Node.js`);
});
