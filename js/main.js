
$("#input-message").bind('keyup', function(e) {
     var key = e.keyCode || e.wich;
    if (key === 13) {
       var message = $("#input-messsage").val();
        send_message();
        alert(message);
    }
});
function send_message() {
    $("#chat-panel").append("<div class= 'send message'>" + message + "</div>");
};