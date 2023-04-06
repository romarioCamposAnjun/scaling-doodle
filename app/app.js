const express = require("express");
const server = express();
const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`API pronta para uso na porta: ${port}`);
});

server.get("/", (req, res, next) => {
	res.json({ title: "API em Node.js" });
});
