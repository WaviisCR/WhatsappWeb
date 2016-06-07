/*TESTING: ENVIAR MENSAJE*/
/*(06/06)*/
/*var xTriggered = 0;
$( "#input-message" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.sen_message();
  }
});*/
/*     var key = e.keyCode || e.wich;
    if (key === 13) {
       var message = $("#input-messsage").val();
        send_message();
        alert(message);
    }
});
function send_message() {
    $("#chat-panel").append("<div class= 'send message'>"+message+"</div>");
};*/



/*SEND MESSAGE: CARGAR MENSAJE EN PANEL DE CHAT*/
/*function input() {
  var textInput = document.getElementById("input-message");
  return textInput.value;
}

function sendMessage(){
  var message = input();
  if (message != ""){
    contenedor(message);
    limpiarInput();
  }
}

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
          sendMessage();
    }
});

function limpiarInput() {
  var textInput = document.getElementById("input-message");
  textInput.value = "";
  textInput.focus();
}

/*MOSTRAR LA HORA EN EL MENSAJE*/
/*function contenedor(message) {
  var timing = new Date();
  var hour = timing.getHours();
  var min = timing.getMinutes();
  
  if(min<10){
    min = "0" + min
  }
  if(hour<10){
    hour = "0" + hour
  }
  var chatPanel = document.getElementById("chat-panel");
  var div = document.createElement("div");
  div.className = "send message";
  div.innerHTML =  "<div>" + "<p>" + message + "</p>" + "</br>" + "<span>" + hour + ":" + min + "</span>" + "</div>";
  chatPanel.appendChild(div);
}*/
/*-->LA PAGINA SE RECARGA AL PRESIONAR ENTER, EN EL DEBUG APARECE LA CAJA Y AUTOMATICAMENTE DESAPARECE: revisar las clases de Jquery para ver nada chanque este codigo (07/06)<--*/


/*reordenando codigo para enviar mensajes(lo jalo de los dos intentos anteriores)*/
$("#input-message").on('keydown', function(e) {
    var key = e.keyCode || e.wich;
    if (key === 13) {
        var message = $("#input-message").val();
        send_message(message);
        limpiarInput();
    }
});

function send_message(message) {
    var timing = new Date();
    var hour = timing.getHours();
    var min = timing.getMinutes();

    if (min < 10) {
        min = "0" + min
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    $("#chat-panel").append('<div class="send message"><p>' + message + '</p><span class="message-date">' + hour + ':' + min + '</span></div>');
    return message;
};

function limpiarInput() {
    var textInput = document.getElementById("input-message");
    textInput.value = "";
    textInput.focus();
}



/* TESTING BUSQUEDA*/
$("#search").on("keyup", search);

function search_contact() {
    var contact = $(".contact");
    var texto = $("#search");
    texto = texto.toLowerCase();
    contact.show();
    for (var i = 0; i < contact.size(); i++) {
        var content = contact.eq(i).text();
        content = content.toLowerCase();
        var index = content.indexOf(texto);
        if (index == -1) {
            contact.eq(i).hide();
        }
    }
};
/*LAS BUSQUEDAS SE GUARDAN EN UNA LISTA, PERO NO MUESTRAN RESULTADOS.*/