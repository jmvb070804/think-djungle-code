var $box = $(".box");

$(".closei").each(function () {
  var color = $(this).css("backgroundColor");
  var content = $(this).html();
  $(this).click(function () {
    $box.css("backgroundColor", color);
    $box.addClass("open");
    $box.find("p").html(content);
  });

  $(".close").click(function () {
    $box.removeClass("open");
    $box.css("backgroundColor", "transparent");
  });

  $("body").toggleClass("overlay");
  $("#pop-toggle").click(function () {
    $(".popup").toggle();
    $("body").toggleClass("overlay");
  });
  $(".close").click(function () {
    $(".popup").toggle();
    $("body").toggleClass("overlay");
  });
});
