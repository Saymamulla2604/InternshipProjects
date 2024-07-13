// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage =
    "WELCOME TO RAJARAMBAPU PARAMOUNT ACADEMY, How can I help you?";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // Uncomment this if you want the bot to respond to this buttonSendText event
  setTimeout(() => {
    getHardResponse(sampleText);
  }, 1000);
}

function sendButton() {
  getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

function getBotResponse(input) {
  // Simple responses
  if (input == "hello") {
    return "Hi, What can I do for you?";
  } else if (input == "goodbye" || input == "bye") {
    return "Talk to you later!";
  } else if (input.includes("Hello")) {
    return "Hi, What can I do for you?";
  } else if (input.includes("Hi")) {
    return "Hi, What can I do for you?";
  } else if (input.includes("Courses")) {
    return "We Have Courses for JEE, NEET, MH-CET and NDA Students.You Can check them in our Courses Section.";
  } else if (input.includes("courses")) {
    return "We Have Courses for JEE, NEET, MH-CET and NDA Students.You Can check them in our Courses Section.";
  } else if (input.includes("Course")) {
    return "We Have Courses for JEE, NEET, MH-CET and NDA Students.You Can check them in our Courses Section.";
  } else if (input.includes("course")) {
    return "We Have Courses for JEE, NEET, MH-CET and NDA Students.You Can check them in our Courses Section.";
  } else if (input.includes("admission")) {
    return "Admission will start very soon, for more information call  8888480801 .";
  } else if (input.includes("Admission")) {
    return "Admission will start very soon, for more information call  8888480801 .";
  } else if (input.includes("admissions")) {
    return "Admission will start very soon, for more information call  8888480801 .";
  } else if (input.includes("Admissions")) {
    return "Admission will start very soon, for more information call  8888480801 .";
  } else if (input.includes("facility")) {
    return "We have many exciting and usefull facilities like, transport, computer lab, library, night study, smart classroom, study material, etc.";
  } else if (input.includes("facilities")) {
    return "We have many exciting and usefull facilities like, transport, computer lab, library, night study, smart classroom, study material, etc.";
  } else if (input.includes("Facility")) {
    return "We have many exciting and usefull facilities like, transport, computer lab, library, night study, smart classroom, study material, etc.";
  } else if (input.includes("Facilities")) {
    return "We have many exciting and usefull facilities like, transport, computer lab, library, night study, smart classroom, study material, etc.";
  } else if (input.includes("Contact")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("contact")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("Phone")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("phone")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("call")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("Call")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("number")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("Number")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("Phone")) {
    return "For more information contact: GIRISH SHETE  8888480801  9766163468.";
  } else if (input.includes("location")) {
    return "Near RIT , Rajaramnagar , Islampur, Sangli-415414, For more information contact: GIRISH SHETE  8888480801  9766163468.";
  }else if (input.includes("Location")) {
    return "Near RIT , Rajaramnagar , Islampur, Sangli-415414, For more information contact: GIRISH SHETE  8888480801  9766163468.";
  }else if (input.includes("map")) {
    return "Near RIT , Rajaramnagar , Islampur, Sangli-415414, For more information contact: GIRISH SHETE  8888480801  9766163468.";
  }else if (input.includes("locations")) {
    return "Near RIT , Rajaramnagar , Islampur, Sangli-415414, For more information contact: GIRISH SHETE  8888480801  9766163468.";
  }else if (input.includes("Locations")) {
    return "Near RIT , Rajaramnagar , Islampur, Sangli-415414, For more information contact: GIRISH SHETE  8888480801  9766163468.";
  }else {
    return "Sorry I did not understood what you were trying to say! For more information contact: GIRISH SHETE  8888480801  9766163468.";
  }
}
