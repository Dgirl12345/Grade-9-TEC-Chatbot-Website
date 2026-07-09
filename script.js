function chatbotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (input.includes("what is a school")) {
    return "A School is a place where you learn and make new friends";
  } else if (input.includes("im tired")) {
    return "So sorry, whats wrong";
  } else if (input.includes("im happy")) {
    return "So excited to hear that";
  } else if (input.includes("weather")) {
    return "I can't fetch live weather, but you can check a weather API!";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else {
    return "Sorry, I don't understand that. Try asking something else.";
  }
}

document.getElementById("sendBtn").onclick = function() {
  let userText = document.getElementById("userInput").value;
  if (userText.trim() === "") return;

  let botReply = chatbotResponse(userText);

  let messages = document.getElementById("messages");
  messages.innerHTML += "<p><span class='user'>You:</span> " + userText + "</p>";
  messages.innerHTML += "<p><span class='bot'>Bot:</span> " + botReply + "</p>";

  document.getElementById("userInput").value = "";
  messages.scrollTop = messages.scrollHeight;
};
