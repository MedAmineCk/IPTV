$("#whatsapp .main-btn").on("click", function () {
  $("#whatsapp").toggleClass("active");
});

//config
var conf = {
  accounts: [
    {
      whatsapp: "212775931245",
      label: "فريق الدعم",
      message: "مرحبا",
      logo: "../img/support.png",
    },
  ],
  label: "دردش معنا",
  titel: "بدء محادثة",
  subtitel: "أهلا! انقر فوق أحد أعضائنا أدناه للدردشة على WhatsApp",
  notification: "عادة ما يرد الفريق في غضون بضع دقائق.",
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
