$("#whatsapp .main-btn").on("click", function () {
  $("#whatsapp").toggleClass("active");
});

//config
var conf = {
  accounts: [
    {
      whatsapp: "447529430801",
      label: "Support Team",
      message: "Hello",
      logo: "./img/support.jpg",
    },
  ],
  label: "Chat with us",
  titel: "Start Chat",
  subtitel: "Hello! Click on one of our team members below to chat on WhatsApp",
  notification: "The team usually responds within a few minutes.",
};
function openWtp(number, text) {
  window.open("https://wa.me/" + number + "?text=" + text);
}
conf.accounts.forEach((item) => {
  var number = item.whatsapp;
  var message = item.message;
  var label = item.label;
  var logo = item.logo;
  $("#whatsapp .wtp-body").append(wtpMudule(number, message, label, logo));
});

function wtpMudule(number, message, label, logo) {
  return `<div class="item animate__animated" onclick="openWtp('${number}' , '${message}')">
        <div class="logo-container flex-center">
            <img src="${logo}">
        </div>
        <div class="content">
            <p class="name">${label}</p>
            <p class="sub">${number}</p>
        </div>
        <div class="icon-container flex-center">
            <span class="material-symbols-outlined">open_in_new</span>
        </div>
    </div>`;
}

$("#whatsapp .btn-container .label").html(conf.label);
$("#whatsapp .wtp-container .instructions .h1").html(conf.titel);
$("#whatsapp .wtp-container .instructions .sub").html(conf.subtitel);
$("#whatsapp .wtp-body .header").html(conf.notification);
