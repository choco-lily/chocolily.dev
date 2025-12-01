var fs = require("fs")

var data = fs.readFileSync(
    "./node_modules/@astrojs/starlight/components/ThemeSelect.astro",
    "utf-8",
)

var newValue = data.replace("false, value: 'd", "true, value: 'd")
newValue = newValue.replace("true, value: 'a", "false, value: 'a")
newValue = newValue.replace('value="auto"', 'value="dark"')

fs.writeFileSync(
    "./node_modules/@astrojs/starlight/components/ThemeSelect.astro",
    newValue,
    "utf-8",
)

console.log("now default mode is dark!")
