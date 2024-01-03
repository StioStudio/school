basicSetup()
await lastUpdated({repo: "school", path: "index.html"})
// let rem = await(await fetch("/assets/projects.json")).json()
let rem = await(await fetch("./projects.json")).json()
contentCreate(rem)
// i18n.getTra().forEach(e => {
//     console.log(e)
// });
// console.log(i18n.createMessagesJSON())
await i18n.setLanguage("no")
i18n.translatePage()