const fs = require("fs");
const login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));

	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent", listenEvents: true});
	api.listen(function callback(err, message)
	{		
		if(message.body==="/Getid"||message.body==="/getid"||message.body==="/get id"||message.body==="/Get id"||message.body==="/Get ID") {
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage(message.senderID, message.threadID);
            api.sendMessage("Your ID: ", message.threadID); 			
		} 
		else if(message.body === "/Jarvis"||message.body==="/jarvis") { 
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage("Send bobs n vegena. \nEnter /NotFemale if u dont have bobs n vegena", message.threadID); 
			api.sendMessage("Please read the following sentence to activate Jarvis", message.threadID);
			return;
		}	
		else if(message.body === "/NotFemale"||message.body==="/notfemale"||message.body==="/not female") { 
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage("Send me 5$ via paypal.me/hieuvoo to activate", message.threadID); 
			api.sendMessage("Please read the following sentence to activate Jarvis. \nOr type /Get ID. Copy ur id and enter", message.threadID);
			return;
		}
		else if(message.body === message.threadID) { 
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage("Enter /Commands to see the rest of the Commands", message.threadID);
			api.sendMessage("Jarvis Activation Successful", message.threadID);
			return;
		}
		else if(message.body === "/Commands"||message.body==="/command"||message.body==="/Command"||message.body==="/commands") { 
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage("Server Bảo Trì \nNạp tiền để giúp bảo trì Server \npaypal.me/hieuvoo", message.threadID);
			return;
		}		
		else if (message.body){
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage("\n \n🙂 Đây là Jarvis AI. \n- Hieu đang đi ỉa, sẽ rep hay khi Hieu seen \n- Nếu muốn chat với Jarvis gõ /Jarvis. \n- Tin nhắn của bạn: " + message.body, message.threadID); 
			api.sendTypingIndicator(message.threadID);
	        return;
		}
	});
});