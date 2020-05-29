const { writeFile } = require("fs");
const { promisify } = require("util");
const writeFileAsync = promisify(writeFile);
const app = require("./public/build/app.js");

(async () => {
  const pages = [
    { url: "/", file: "index.html" },
    { url: "/page/1", file: "page/1.html" },
    { url: "/page/2", file: "page/2.html" },
    { url: "/page/3", file: "page/3.html" },
  ];

  for (const i of pages) {
    const { html } = app.render({ url: i.url });

    const output = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
    
        <title>Tailwind</title>
    
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="/build/site.css" />
        <link rel="stylesheet" href="/build/bundle.css" />
      </head>
    
      <body>
        ${html}
      </body>
    </html>
    `;
    await writeFileAsync(`./generated/${i.file}`, output);
  }
})();
