var images = [
  "https://ik.imagekit.io/medamineck/iptv/img__14__UZzrMUYPYX.jpg",
  "https://ik.imagekit.io/medamineck/iptv/img__10__y2P5s0X7rZ.jpg",
  "https://ik.imagekit.io/medamineck/iptv/img__2__UfJ-mMx9FS.jpg",
  "https://ik.imagekit.io/medamineck/iptv/img__7__EamUJqyuP.jpg",
  "https://ik.imagekit.io/medamineck/iptv/img__25__Bs0jcWYp1c7.jpg",
];
$(document).ready(function () {
  var milliseconds = 6000;
  var transitionTime = 6000;

  var $showing, $target1, $hidden, $target2;
  $showing = $target1 = $(".back");
  $hidden = $target2 = $(".front");

  // You could also use this instead of incrementing count.
  // Just remember not to show the same image twice in a row
  var count = Math.floor(Math.random() * images.length);

  var showImage = function (index, duration) {
    var tempImage = new Image();
    tempImage.src = images[count];

    $(tempImage).on("load", function () {
      $hidden
        .css("opacity", "0")
        .animate(
          { opacity: 1, width: "120%", height: "120%" },
          { duration: duration }
        )
        .css("background-image", "url(" + tempImage.src + ")");

      $showing.animate({ opacity: 0, width: "100%" }, { duration: duration });

      var $temp = $showing;
      $showing = $hidden;
      $hidden = $temp;
    });
  };

  // show the first image immediately
  //showImage(count, 0);

  $hidden
    .css("opacity", "0")
    .animate({ opacity: 1, width: "120%", height: "120%" }, { duration: 6000 })
    .css(
      "background-image",
      "url(https://ik.imagekit.io/medamineck/iptv/img__25__Bs0jcWYp1c7.jpg)"
    );
  setInterval(function () {
    showImage(count, transitionTime);

    if (count < images.length - 1) {
      count++;
    } else {
      count = 0;
    }
  }, milliseconds);
});
