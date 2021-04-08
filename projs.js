$(document).ready(function() {

    let mic = document.getElementById("chat-mic");
    let chatlogs = document.querySelector('.chat-logs');
    let chatmessages = document.querySelector('.chat-messages');

    let introduction = ["Hey! Nice to meet you.", "Hii! How are you ?", "Hey! How can i help you ?", "Hello! Good to see you." ,"Yo!"];
    let name = ["Hello! I am Infini.", "Hi! I am Infini.", "Hello! My name is Infini.", "Yo! Infini here."];
    let help = ["How may I assist you ?", "How can I help you ?", "What can I do for you ?"];
    let mood = ["I am not allowed to say it!", "I am good and you ?", "All good!", "I am fine , what about you?", "Why do you ask?"];
    let hobby = ["I like what you like!", "I love talking to humans!", "I dont know!", "Why do you ask?", "Not sure! What about you?"];
    let greetings = ["You are welcome!", "Hope you found what you were looking for!" ,"I was designed for this so ,no thankyou!", "Glad I was of use to you", "Welcome!"];
    let closure = ["Leaving so soon?", "Goodbye!", "Bye-bye!", "See you again!", "Hope to see you soon!"];

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    function call(message){
        chatlogs.appendChild(usermsg(message));
        setTimeout(function() {      
            choosereply(message);  
        }, 500)
        $(".chat-messages").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 500);
        //choosereply(message);
    }

    $('#chat-form').keypress(function(event) {
		if(event.which === 13)  {
            event.preventDefault();
            var message = $("#text-input").val();
            call(message);
            $('#text-input').val("");
        }
    })

    $('#chat-submit').click(function(event) {
        event.preventDefault();
        var message = $("#text-input").val();
        call(message);
        $('#text-input').val("");
    })

    function usermsg(message){
        let output = '';
        output += `<div class="userset">`;
        output += `<div class="chatarea user" style="height:auto; width:max-content;">${message}</div>`;
        output += `<div class="user-icon"><img class="chatbot-img" src="user_img.jpg" style="float:right";></div>`;
        output += `</div>`;
        //output.prepend("<img class='chatbot-img' src='images/user_img.jpg'>") ;
        chatmessages.innerHTML += output;
        return chatmessages;
    }

    function chatbotmsg(message){
        let output = '';
        output += `<div class="chatbotset">`;
        output += `<div class="user-icon"><img class="chatbot-img" src="chatbot_img.jpg"></div>`;
        output += `<div class="chatarea chatbot" style="height:auto; width:auto;">${message}</div>`;
        output += `</div>`
        chatmessages.innerHTML += output;
        return chatmessages;
    }

    function choosereply(message){
        let reply = "I dont know";
        if(message.includes("hey") || message.includes("hi") || message.includes("yo") || message.includes("hello")){
            let result = introduction[Math.floor(Math.random() * introduction.length)];
            reply = result;
        }
        if(message.includes("name") || message.includes("naam") || message.includes("names")){
            let result = name[Math.floor(Math.random() * name.length)];
            reply = result;
        }
        if(message.includes("help") || message.includes("assisst") || message.includes("asisst")){
            let result = help[Math.floor(Math.random() * help.length)];
            reply = result;
        }
        if(message.includes("how are you") || message.includes("feeling") || message.includes("you doing") || message.includes("mood")){
            let result = mood[Math.floor(Math.random() * mood.length)];
            reply = result;
        }
        if(message.includes("hobby") || message.includes("like doing") || message.includes("you do")){
            let result = hobby[Math.floor(Math.random() * hobby.length)];
            reply = result;
        }
        if(message.includes("thanks") || message.includes("thankyou") || message.includes("thank you") || message.includes("thenks")){
            let result = greetings[Math.floor(Math.random() * greetings.length)];
            reply = result;
        }
        if(message.includes("bye") || message.includes("bi") || message.includes("see ya") || message.includes("goodbye")){
            let result = closure[Math.floor(Math.random() * closure.length)];
            reply = result;
        }
        if(message.includes("project") || message.includes("projects")){
            let year = window.prompt("Specify the year : 1.2018 2.2019 3.2020");
            switch(year){
            case "1" : window.open("https://shahandanchor.com/research/index.php/Ctrl_projects?projects=18","_blank");
            break;
            case "2" : window.open("https://shahandanchor.com/research/index.php/Ctrl_projects?projects=19","_blank");
            break;
            case "3" : window.open("https://shahandanchor.com/research/index.php/Ctrl_projects?projects=20","_blank");
            break;
            }
            let result = "Projects Page extended in new tab!"
            reply = result;
        }
        
        //-------------------Events----------------//
        if(message.includes("event") || message.includes("events")){
            window.open("https://shahandanchor.com/research/index.php/Ctrl_events","_blank");
            let result = "Events page opened in new tab!"
            reply = result;
        }
        
        //--------------------Mous-----------------//
        if(message.includes("mous") || message.includes("mou")){
            window.open("https://shahandanchor.com/research/index.php/Ctrl_mous","_blank");
            let result = "Mou's page initiated in new tab!"
            reply = result;
        }
        
        //-----------------------IPR---------------------//
        if(message.includes("ipr") || message.includes("iprs")){
            window.open("https://shahandanchor.com/research/index.php/Ctrl_ipr","_blank");
            let result = "IPR page launched successfully in new tab!"
            reply = result;
        }
        
        //-------------------------------Grants---------------//
        if(message.includes("grant") || message.includes("grants")){
            window.open("https://shahandanchor.com/research/index.php/Ctrl_pgrants","_blank");
            let result = "Grants page commenced in new tab!"
            reply = result;
        }
        
        //-------------------------------testimonials-----------------//
        if(message.includes("testimonial") || message.includes("testimonials") || message.includes("achievement") || message.includes("achievements")){
            window.open("https://shahandanchor.com/research/index.php/Ctrl_testimonials","_blank");
            let result = "Testimonials page extended in new tab!"
            reply = result;
        }
        
        //-------------------------Team------------------//
        if(message.includes("team") || message.includes("members") || message.includes("member") || message.includes("group")){
            window.open("https://shahandanchor.com/research/index.php/Ctrl_ourteam","_blank");
            let result = "Our Team's page displayed successfully in new tab!"
            reply = result;
        }
        
        //----------Contact-------//
        if(message.includes("contact") || message.includes("connect")){
            window.open("https://shahandanchor.com/research/index.php/Ctrl_contact","_blank");
            let result = "Well we had a button above for contact!"
            reply = result;
        }

        if(message.includes("home") || message.includes("starting") || message.includes("start")){
            window.open("https://shahandanchor.com/research/","_blank");
            let result = "Back to where we started!"
            reply = result;
        }
        chatlogs.appendChild(chatbotmsg(reply));    
    }
    
    recognition.onresult=function(e){
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        call(transcript);
        $('#text-input').val("");
    }
    mic.addEventListener("click", function(){
        mic.style.background='red';
        recognition.start();
        //console.log("Activated");
    })
    recognition.onend=function(){
        mic.style.background="none";
    }
})