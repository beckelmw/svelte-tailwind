const { writeFile, mkdir, copy } = require("fs-extra");
const { dirname } = require("path");

const app = require("./public/build/app.js");

(async () => {
  const pages = [
    { url: "/", file: "index.html" },
    { url: "/page/1", file: "page/1/index.html" },
    { url: "/page/2", file: "page/2/index.html" },
    { url: "/page/3", file: "page/3/index.html" },
  ];

  const data = { id: 1 };

  for (const i of pages) {
    const { html, head } = app.render({ url: i.url, data });

    const output = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    ${head}
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/site.min.css" />
  </head>
  <body>
    ${html}
  </body>
</html>
`;

    const outputPath = `./generated/${i.file}`;

    try {
      await mkdir(dirname(outputPath), { recursive: true });
    } catch (err) {}

    await writeFile(outputPath, output);
    console.log(`Created ${outputPath}`);
  }

  await copy("./public/img", "./generated/img");
  await copy("./public/build/site.min.css", "./generated/site.min.css");
  await copy("./public/favicon.png", "./generated/favicon.png");

  console.log("Copied assets");
})();
