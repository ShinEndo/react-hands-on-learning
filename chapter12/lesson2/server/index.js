import express from "express";
const app = express();

app.use(express.static("./build"));

import React from "react";
import ReactDOMServer from "react-dom/server"
import { Menu } from "../src/Menu.js"
import data from "../src/data.json";

const PORT = process.env.PORT || 4000;

app.get("/*", (req,res) => {
    // const app = ReactDOMServer.renderToString(
    //     <Menu recipes={data} title="Delicious REcipes" />
    // );

    const renderedHtml = ReactDOMServer.renderToString(<Menu recipes={data} title="Delicious REcipes" />);
    const indexFile = path.resolve("./build-server/index.html");
    
    fs.readFile(indexFile, "utf8", (err,data) => {
        console.log(`loaded!`);
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${renderedHtml}</div>`
            )
        );
    })
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

