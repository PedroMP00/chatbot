var messages = [],
  lastUserMessage = "",
  botMessage = "",
  botName = 'Chatbot Informatica' 


function chatbotResponse() {
  botMessage = "No tengo una respuesta para eso."; 

  if (lastUserMessage === 'Hola') {
    botMessage = 'Hola!';
  }

  if (lastUserMessage === 'nombre') {
    botMessage = 'Mi nombre es ' + botName;
  }
  if (lastUserMessage === 'Nombre') {
    botMessage = 'Mi nombre es ' + botName;
  }
  if (lastUserMessage === 'hola') {
    botMessage = 'Hola!';
  }
  if (lastUserMessage === 'Como te llamas') {
    botMessage = 'Mi nombre es ' + botName;
  }
  if (lastUserMessage === 'como te llamas') {
    botMessage = 'Mi nombre es ' + botName;
  }
  if (lastUserMessage === 'Quien eres') {
    botMessage = 'Simplemente soy un Chatbot programado por <a href="http://pedrompdev.ml target="_blank">PedroMP</a>';
  }
  if (lastUserMessage === 'quien eres') {
    botMessage = 'Simplemente soy un Chatbot programado por <a href="http://pedrompdev.ml target="_blank">PedroMP</a>';
  }
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse()
    messages.push("<b><i>" + botName + ":</i></b> " + botMessage)
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

function Speech(say) {
  if ('speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance(say);
    utterance.volume = 1; 
    utterance.lang = 'es-ES';
    speechSynthesis.speak(utterance);
  }
}

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
}