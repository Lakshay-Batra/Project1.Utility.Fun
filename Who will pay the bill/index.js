$("button").one("click",function () {
    var names = $("#input-field").val();
    names = names.split(" ");
    var length =names.length;
    var randomName=names[Math.floor(Math.random() * (length))];
    $("#output").text(randomName + " will pay the bill.");
    $("#output").removeClass("visibility");
});