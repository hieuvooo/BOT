# Facebook Personal Chatbot
### Download: https://nodejs.org
### login

__Email & Password then save appState to file__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});
```

__AppState loaded from file__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);
});
```
### Credit: https://github.com/Schmavery
### Chi tiết hơn: https://github.com/Schmavery/facebook-chat-api/blob/master/DOCS.md#login 
